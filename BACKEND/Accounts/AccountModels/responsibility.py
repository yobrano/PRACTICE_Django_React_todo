from django.db import models


# Create your models here.
class Responsibility(models.Model):
    responsibility = models.ForeignKey(, on_delete=models.SET_NULL, null= True)
    