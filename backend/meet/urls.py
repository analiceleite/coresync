from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReuniaoViewSet

router = DefaultRouter()
router.register(r'meet', ReuniaoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
