from django.db import models
from django.contrib.auth import get_user_model
import os
from django.conf import settings


# Create your models here.
class Training(models.Model):
    title = models.CharField(max_length=40)
    description = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title

class TrainingStatus(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in progress', 'In progress'),
        ('complete', 'Complete'),
    ]

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='draft',
    )
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title