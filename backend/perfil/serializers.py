from rest_framework import serializers

class ProfileImageUploadSerializer(serializers.Serializer):
    file = serializers.ImageField()

    def validate_file(self, value):
        if value.size > 5 * 1024 * 1024:
            raise serializers.ValidationError("Este arquivo é muito grande. Tamanho máximo é 5MB.")
        return value