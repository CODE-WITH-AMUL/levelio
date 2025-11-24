from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True, max_length=30)
    email_verification = models.BooleanField(default=False)

    REQUIRED_FIELDS = ['email']

    # Optionally, avoid reverse accessor conflicts
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='configure_user_set',  # custom name
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='configure_user_permissions_set',  # custom name
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )
