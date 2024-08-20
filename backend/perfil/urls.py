from django.urls import path
from . import views

urlpatterns = [
    path('uploadProfilePhoto/', views.ProfileImageUploadView.as_view(), name='image-upload'),
]