from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProfileImageSerializer
from .models import ProfileImage
import os
from rest_framework.decorators import api_view
from django.conf import settings
from rest_framework import viewsets


class ProfileImageViewSet(viewsets.ModelViewSet):
    queryset = ProfileImage.objects.all()
    serializer_class = ProfileImageSerializer

    def create(self, request, *args, **kwargs):
        print("----------------------- i'm here -----------------------")
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)

        file = request.data['file']
        
        file_path = os.path.join(settings.MEDIA_ROOT, 'profile', file.name)

        with open(file_path, 'wb+') as media:
            for chunk in file.chunks():
                media.write(chunk)

        profile_image = ProfileImage(file_path=file_path, user=request.user)
        profile_image.save()

        serializer = self.get_serializer(profile_image)

        print("----------------------- Succefully -----------------------")    
        return Response({"message": "Imagem salva com sucesso!"}, status=status.HTTP_201_CREATED)
        print("----------------------- Client error -----------------------")