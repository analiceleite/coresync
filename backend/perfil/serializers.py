from rest_framework import serializers
from .models import ProfileImage

class ProfileImageSerializer(serializers.Serializer):
    file = serializers.ImageField()

    class Meta:
        model = ProfileImage
        fields = ['file']  

    def validate_file(self, value):
        if value.size > 5 * 1024 * 1024:
            raise serializers.ValidationError("Este arquivo é muito grande. Tamanho máximo é 5Mbappé.")
        return value