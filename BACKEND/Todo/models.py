from django.db import models
from django.contrib import admin
from django.utils import timezone
# Create your models here.

COMPLETION_CHOICES = (
    ("pending", "PENDING"),
    ("progressing", "PROGRESSING"),
    ("completed", "COMPLETED"),
    ("overdue", "OVERDUE"),
)

PRIORITY_CHOICES = (
    ("high", "HIGH"),
    ("medium", "MEDIUM"),
    ("low", "LOW")
)

class TodoItem(models.Model):
    label = models.CharField(max_length=50,)
    start = models.DateTimeField()
    end = models.DateTimeField()
    priority = models.CharField(choices= PRIORITY_CHOICES, max_length=20 )
    description = models.TextField(blank= True)
    completion = models.CharField(choices= COMPLETION_CHOICES, max_length=20, default= "PENDING", null= True, blank= True)
    is_complete = models.BooleanField(default= False)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.label
    

# Admin site
class TodoItemAdminModel(admin.ModelAdmin):

    fieldsets = (
        ("Essentials", {"fields": ("label", "start", "end", "priority")}),
        ("Details", {"fields": ("description", "completion")})
    )

    list_display = ["label", "priority", "start", "end", "completion", "is_complete"]
    list_filter = ["completion", "priority"]