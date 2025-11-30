from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

def test(request):
    return render(request, 'test.html')

class AuthCheckAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"authenticated": True})
    
    
    