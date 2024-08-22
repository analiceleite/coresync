from django.db import models
from django.contrib.auth import get_user_model
import os
from django.conf import settings

# Create your models here.
class ProfileImage(models.Model):
    profile_image = models.TextField(
        False, 
        default=f"{os.path.join(settings.MEDIA_ROOT, 'profile', 'profile_image_default')}"
    )
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return self.profile_photo
