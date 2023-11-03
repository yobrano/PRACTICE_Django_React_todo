from django.db import models

class Activity(models.Model):
    ...


class TaskActivity(models.Model):
    index= models.IntegerField()
    label = models.CharField(max_length=150)
    performance_metric  = models.("Task", on_delete= models.CASCADE)