from rest_framework import serializers
from django.contrib.auth import authenticate
from configure.models import User   

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        max_length = 30,
        write_only = True
    )
    password = serializers.CharField(
        write_only=True,
        required=True,
        min_length=8,
        style={'input_type': 'password'}
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(
        required=True,
        write_only=True,
        style={'input_type': 'password'}
    )

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid email or password")

        user_auth = authenticate(username=user.username, password=password)

        if not user_auth:
            raise serializers.ValidationError("Invalid email or password")

        attrs["user"] = user_auth
        return attrs
