from django.urls import path, include
from rest_framework import routers
from . import views
from .views import *

router = routers.DefaultRouter()
router.register(r'profileImage', ProfileImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]