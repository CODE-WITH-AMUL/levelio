from django.urls import include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]


# API Paths for the login and regsiter include configurations 

LOGIN_APIS_PATHS = [
    path('api/auth/' , include('configure.urls')),
]

# API for the main application include configurations
APP_API_PATHS = [
    path('api/' , include('api.urls')),
]

urlpatterns += LOGIN_APIS_PATHS + APP_API_PATHS
