from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("perfil/", include("perfil.urls")),
    path('api/', include('authentication.api.urls')),
    path('api/', include('meet.urls'))
]
