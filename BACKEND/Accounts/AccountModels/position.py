from django.db import models
from Accounts.AccountModels.task import Task
from Accounts.AccountModels.performance import Performance

# Create your models here.
class JobPosition(models.Model):
    label = models.CharField(max_length= 150)
    task = models.ManyToManyField(Task, through="TaskActivity", on_delete=models.SET_NULL, null= True)
    performance = models.ForeignKey(Performance, on_delete= models.SET_NULL, null= True)

