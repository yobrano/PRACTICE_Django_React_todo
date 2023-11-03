from django.db import models


# Create your models here.
class Activity(models.Model):
    label = models.CharField(max_length= 150)
    measurement = models.ForeignKey(Measurement,  on_delete= models.SET_NULL, null= True )
