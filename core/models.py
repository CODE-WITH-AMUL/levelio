from django.db import models
from django.conf import settings  # use this instead of importing User directly
from django.utils import timezone

# ------------------ BASE TIMESTAMP MODEL ------------------ #

class TimeStamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


# ------------------ CHOICES ------------------ #

ACCOUNT_STATUS = [
    ('ACTIVE', 'Active'),
    ('INACTIVE', 'Inactive'),
]

GENDER_CATEGORY = [
    ('MALE', 'Male'),
    ('FEMALE', 'Female'),
]

SETTING_UI_TYPES = [
    ('DARK', 'Dark'),
    ('LIGHT', 'Light'),
]

LANGUAGE_USER_TYPES = [
    ('ENGLISH', 'English'),
    ('NEPALI', 'Nepali'),
    ('HINDI', 'Hindi'),
]


# ------------------ USER PROFILE MODEL ------------------ #

class UserProfile(TimeStamp):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,  # <-- updated here
        on_delete=models.CASCADE,
        related_name='profile'
    )

    first_name = models.CharField(max_length=25)
    middle_name = models.CharField(max_length=25, blank=True)
    last_name = models.CharField(max_length=25)

    email = models.EmailField()
    profile_picture = models.ImageField(upload_to='database/profile/')  

    sex = models.CharField(
        choices=GENDER_CATEGORY,
        default='MALE',
        max_length=10
    )

    account_type = models.CharField(
        choices=ACCOUNT_STATUS,
        default='ACTIVE',
        max_length=10
    )

    def __str__(self):
        return f"Profile of {self.user.username}"


# ------------------ USER SETTINGS MODEL ------------------ #

class UserSettings(TimeStamp):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,  # <-- updated here
        on_delete=models.CASCADE,
        related_name='settings'
    )

    theme_type = models.CharField(
        max_length=10,
        choices=SETTING_UI_TYPES,
        default='LIGHT'
    )

    notifications = models.BooleanField(default=False)
    two_factor = models.BooleanField(default=False)

    language = models.CharField(
        max_length=20,
        choices=LANGUAGE_USER_TYPES,
        default='ENGLISH'
    )

    def __str__(self):
        return f"Settings for {self.user.username}"
