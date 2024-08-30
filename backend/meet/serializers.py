from rest_framework import serializers
from .models import Reuniao
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['username']


class ReuniaoSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), source='user', write_only=True)
    participantes = serializers.PrimaryKeyRelatedField(queryset= User.objects.all(), many = True)
    class Meta:
        model = Reuniao
        fields = '__all__'
