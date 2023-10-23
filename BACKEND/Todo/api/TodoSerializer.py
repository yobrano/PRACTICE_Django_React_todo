from rest_framework import serializers
from Todo import models


class TodoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.TodoItem
        fields = "__all__"