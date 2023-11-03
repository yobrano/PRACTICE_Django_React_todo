from django.db import models


# Create your models here.
class Performance(models.Model):
    label = models.CharField(max_length= 150)
    
