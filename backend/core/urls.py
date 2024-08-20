from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path("perfil/", include("perfil.urls")),
=======
    path('api/', include('authentication.api.urls')),
>>>>>>> 0782ce847ba6573b81e9b668ed6319cd63d78df7
]
