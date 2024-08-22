from rest_framework import serializers
from .models import Reuniao
from django.contrib.auth.models import User

class ReuniaoSerializer(serializers.ModelSerializer):
    participantes = serializers.PrimaryKeyRelatedField(queryset= User.objects.all(), many = True)
    class Meta:
        model = Reuniao
        fields = '__all__'
