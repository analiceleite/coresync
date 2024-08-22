from rest_framework import serializers
from ..models import Training, TrainingStatus
from django.contrib.auth import get_user_model

class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['title', 'description', 'content']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = '__all__'

class TrainingStatusSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    training = TrainingSerializer()

    class Meta:
        model = TrainingStatus
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance
        