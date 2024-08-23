from rest_framework import serializers
from ..models import Training, TrainingStatus
from django.contrib.auth import get_user_model

class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['title', 'description', 'content', 'id']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id']

class TrainingStatusSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # Somente leitura, não para escrita
    training = TrainingSerializer(read_only=True)  # Somente leitura, não para escrita
    user_id = serializers.PrimaryKeyRelatedField(queryset=get_user_model().objects.all(), write_only=True)
    training_id = serializers.PrimaryKeyRelatedField(queryset=Training.objects.all(), write_only=True)

    class Meta:
        model = TrainingStatus
        fields = ['id', 'status', 'user', 'training', 'user_id', 'training_id']

    def update(self, instance, validated_data):
        # Atualiza o status
        instance.status = validated_data.get('status', instance.status)
        
        # Atualiza o usuário e o treinamento com base nos IDs fornecidos
        if 'user_id' in validated_data:
            instance.user = validated_data['user_id']
        if 'training_id' in validated_data:
            instance.training = validated_data['training_id']
        
        # Salva a instância atualizada
        instance.save()
        return instance
