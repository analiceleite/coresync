from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProfileImageSerializer
from ..models import ProfileImage
import os
from rest_framework.decorators import api_view
from django.conf import settings
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from django.http import FileResponse


class ProfileImageViewSet(viewsets.ModelViewSet):
    queryset = ProfileImage.objects.all()
    serializer_class = ProfileImageSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        file = request.data['file']
        
        file_path = os.path.join(settings.MEDIA_ROOT, 'profile', file.name)

        with open(file_path, 'wb+') as media:
            for chunk in file.chunks():
                media.write(chunk)
                
        try:
            user = request.user
        except:
            return Response({"message":"Usuário não encontrado!"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            image = ProfileImage.objects.get(user=user)
        except:
            image = None

        if image:
            image.profile_image = file_path
        else:
            image = ProfileImage.objects.create(profile_image=file_path, user=user)
        image.save()
        serializer = self.get_serializer(image)

        return Response({"message": "Imagem salva com sucesso!"}, status=status.HTTP_201_CREATED)
    

    def list (self, request, *args, **kwargs):
        try:
            image = ProfileImage.objects.get(user=request.user)
        except:
            return Response({"message":"Imagem não encontrada!"}, status=status.HTTP_400_BAD_REQUEST)

        image_path = image.profile_image
        
        if os.path.exists(image_path):
            return FileResponse(open(image_path, 'rb'), content_type='image/png')
        else:
            return Response({"message":"Imagem não encontrada!"}, status=status.HTTP_400_BAD_REQUEST)
