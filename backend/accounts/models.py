from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    middle_name = models.CharField(max_length=100, null=True, blank=True)
    
    def get_full_name(self):
        """
        Return the user's full name, including middle name.
        """
        if self.middle_name:
            return f"{self.first_name} {self.middle_name} {self.last_name}".strip()
        else:
            return super().get_full_name()
