from rest_framework import serializers
from ..models import Training

class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['title', 'description', 'content']

class TrainingStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['status', 'user']
        