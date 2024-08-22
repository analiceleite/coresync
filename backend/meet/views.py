from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Reuniao
from .serializers import ReuniaoSerializer


class ReuniaoViewSet(viewsets.ModelViewSet): 
    queryset = Reuniao.objects.all()
    serializer_class = ReuniaoSerializer

    