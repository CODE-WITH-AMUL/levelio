# api/models.py
from django.db import models
from configure.models import User
import uuid

class SocialAccount(models.Model):

    ACCOUNT_PROVIDERS_CHOICES = [
        ('google', 'Google'),
        ('facebook', 'Facebook'),
        ('github', 'GitHub'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='social_accounts')
    provider = models.CharField(max_length=20, choices=ACCOUNT_PROVIDERS_CHOICES)
    provider_account_uid = models.CharField(max_length=255)
    extract_data = models.JSONField(blank=True, null=True)

    class Meta:
        unique_together = ('provider', 'provider_account_uid')


class EmailVerificationToken(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='email_verifications')
    email_token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_used = models.BooleanField(default=False)
