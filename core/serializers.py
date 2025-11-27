from rest_framework import serializers
from .models import UserSettings

data = [
    "theme_types",
    "notifications",
    "two_factor",
    "language",
    
]

class UserSettingsSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        fields = data
        reads_only_field = ["user"]
        
