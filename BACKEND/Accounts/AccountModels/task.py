from django.db import models
from Accounts.AccountModels.performance import Performance

# Create your models here


class Task(models.Model):
    label = models.CharField(max_length= 150)
    weight = models.DecimalField()

class TaskActivity(models.Model):
    index = models.IntegerField()
    Task = models.ForeignKey(Task, on_delete= models.CASCADE )
    performance = models.ForeignKey(Performance, on_delete=models.CASCADE)
