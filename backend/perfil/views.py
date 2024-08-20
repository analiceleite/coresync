from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProfileImageUploadSerializer
import os
from rest_framework.decorators import api_view
from django.conf import settings


class ProfileImageUploadView(APIView):
    def post(self, request, *args, **kwargs):
        print("----------------------- i'm here -----------------------")
        serializer = ProfileImageUploadSerializer(data=request.data)

        if serializer.is_valid():
            file = serializer.validated_data['file']
            
            with open(os.path.join(settings.MEDIA_ROOT, f'profile/{file.name}'), 'wb+') as media:
                for chunk in file.chunks():
                    media.write(chunk)

            print("----------------------- Succefully -----------------------")    
            return Response({"message": "Imagem salva com sucesso!"}, status=status.HTTP_201_CREATED)
        print("----------------------- Client error -----------------------")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)