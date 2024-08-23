from rest_framework.response import Response
from rest_framework import status, filters
from django_filters.rest_framework import DjangoFilterBackend
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

    def perform_create(self, serializer):
        instance = serializer.save()
        users = User.objects.all()

        for user in users:
            TrainingStatus.objects.create(training=instance, user=user)
        

class TrainingStatusViewSet(viewsets.ModelViewSet):
    queryset = TrainingStatus.objects.all()
    serializer_class = TrainingStatusSerializer
    permission_classes = [IsAuthenticated]  

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['user_id', 'status']

    def get_queryset(self):
        return TrainingStatus.objects.all()