from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Reuniao
from .serializers import ReuniaoSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters


class ReuniaoViewSet(viewsets.ModelViewSet): 
    queryset = Reuniao.objects.all()
    serializer_class = ReuniaoSerializer
    permission_classes = [IsAuthenticated]

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['user_id']

    # def get_queryset(self):
    #     return TrainingStatus.objects.all()