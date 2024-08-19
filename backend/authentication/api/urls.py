from django.urls import path
from .views import *

urlpatterns = [
    path('login/', login_user, name='login_user'),
    path('register/', register_user, name='register_user'),
    # Para visualização dos dados
    path('users/', list_users, name='list_users'),
    path('users/<int:user_id>/', get_user, name='get_user'),
]
