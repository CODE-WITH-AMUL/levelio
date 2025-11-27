from django.shortcuts import render
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import UserSettingseSerializers
from rest_framework.permissions import AllowAny
class UserSettingsViewSet(viewsets.ModelViewSet):
    serializer_class = UserSettingseSerializers
    permission_classes = [permissions.AllowAny] # for Testing Phase we are allowing the settings before login
    
    queryset = UserSettingseSerializers.Meta.model.objects.all()
    
    
    
    


