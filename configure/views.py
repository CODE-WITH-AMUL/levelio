# api/views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import RegisterSerializer, LoginSerializer
from api.models import EmailVerificationToken
from api.utils import send_email_verification
import logging
from rest_framework.permissions import IsAuthenticated

logger = logging.getLogger(__name__)

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            try:
                user = serializer.save()
                
                # Try to send email verification
                try:
                    token_obj = EmailVerificationToken.objects.create(user=user)
                    send_email_verification(user.email, token_obj.email_token)
                    message = 'User registered. Please verify your email.'
                    email_sent = True
                except Exception as e:
                    logger.error(f"Failed to send verification email: {e}")
                    message = 'User registered successfully. (Email verification could not be sent)'
                    email_sent = False
                
                response_data = {
                    'message': message,
                    'user': {
                        'id': user.id,
                        'username': user.username,
                        'email': user.email
                    },
                    'email_sent': email_sent
                }
                
                return Response(response_data, status=status.HTTP_201_CREATED)
                
            except Exception as e:
                logger.error(f"Registration failed: {e}")
                return Response(
                    {'error': 'Registration failed due to server error'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.validated_data["user"]
            
            return Response({
                "message": "Login successful",
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email
                }
            }, status=200)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)