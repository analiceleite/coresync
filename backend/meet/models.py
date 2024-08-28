from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

class Reuniao(models.Model):
    titulo = models.CharField(max_length=255)
    data = models.DateField()
    hora = models.TimeField()
    duracao = models.CharField(max_length=10, default='30min')
    descricao = models.TextField(blank=True)
    participantes = models.ManyToManyField(User, related_name='reunioes')
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
