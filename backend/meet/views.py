from rest_framework import viewsets
from .models import Reuniao
from .serializers import ReuniaoSerializer


class ReuniaoViewSet(viewsets.ModelViewSet): #CRUD
    queryset = Reuniao.objects.all()
    serializer_class = ReuniaoSerializer