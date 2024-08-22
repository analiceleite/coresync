from django.db import models

class Reuniao(models.Model):
    titulo = models.CharField(max_length=255)
    data = models.DateField()
    hora = models.TimeField()
    descricao = models.TextField(blank=True)
    participantes = models.ManyToManyField('auth.User', related_name='reunioes')

    def __str__(self):
        return self.titulo
