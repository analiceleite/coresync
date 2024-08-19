from django.urls import path
from .views import *

urlpatterns = [
    path('login/', login_user, name='login_user'),
    path('register/', register_user, name='register_user'),
    # GET dos dados
    path('api/user/auth/', get_authenticated_user, name='get_authenticated_user'),
    path('user/', list_users, name='list_users'),
    path('user/<int:user_id>/', get_user, name='get_user'),
    # PUT dos dados
    path('update-user/<int:user_id>/', update_user, name='update_user'),
    path('update-password/<int:user_id>/', update_password, name='update_password'),
]
