from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("perfil/", include("perfil.api.urls")),
    path("training/", include("training.api.urls")),
    path('api/', include('authentication.api.urls')),
    path('api/meet/', include('meet.urls'))
]
