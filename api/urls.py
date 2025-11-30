from django.urls import path
from .views import test, AuthCheckAPI

urlpatterns = [
    path('test/', test, name='test'),
    path('auth/check/', AuthCheckAPI.as_view(), name='auth-check'),
]
