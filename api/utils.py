# api/utils.py
import environ
from django.conf import settings
from django.core.mail import send_mail

env = environ.Env()
environ.Env.read_env()

API_URL = env('BASE_API_URL')

def send_email_verification(email, token):
    subject = 'Email Verification'

    message = f"""
    Verify your email using the link:
    {API_URL}/api/verify-email/?token={token}

    Or use this token: {token}
    """

    send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [email],
        fail_silently=False,
    )
