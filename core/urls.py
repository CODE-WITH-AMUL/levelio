from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import UserSettingViewSet

router = DefaultRouter()
router.register(r'settings', UserSettingViewSet, basename="settings")

urlpatterns = [
    path('', include(router.urls)),
]
