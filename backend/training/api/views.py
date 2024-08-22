from rest_framework.response import Response
from rest_framework import status
from .serializers import TrainingSerializer, TrainingStatusSerializer
from ..models import Training, TrainingStatus
from django.conf import settings
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class TrainingViewSet(viewsets.ModelViewSet):
    queryset = Training.objects.all()
    serializer_class = TrainingSerializer
    permission_classes = [IsAuthenticated]

class TrainingStatusViewSet(viewsets.ModelViewSet):
    queryset = TrainingStatus.objects.all()
    serializer_class = TrainingStatusSerializer
    permission_classes = [IsAuthenticated]