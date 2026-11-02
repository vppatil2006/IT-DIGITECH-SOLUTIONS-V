from django.db import models

# Create your models here.
class logininfo(models.Model):
    email = models.CharField(max_length=200, null=True, blank=True)
    password = models.TextField()