from django.db import models
from WorkLog.WorkLogModels.activity import Activity

class Task(models.Model):
    activity = models.ManyToManyField(Activity, through="TaskActivity", on_delete= models.CASCADE)
    