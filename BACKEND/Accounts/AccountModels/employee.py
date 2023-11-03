from django.db import models
from django.contrib.auth.models import User as AuthUser
from Accounts.AccountModels.position import JobPosition

# Create your models here.
class Employee(models.Model):
    user = models.ForeignKey(AuthUser, on_delete=models.CASCADE)
    position = models.ForeignKey(JobPosition, on_delete=models.SET_NULL, null= True )
    