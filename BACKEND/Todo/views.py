from rest_framework.decorators import api_view
from rest_framework.response import Response as APIRespoense
from rest_framework.status import HTTP_200_OK
from Todo.api.TodoSerializer import TodoSerializer
from Todo.models import TodoItem
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(["POST"])
def create(request):
    ...

@api_view(["GET"])
def all(request):
    todo_items = TodoItem.objects.all()
    payload = TodoSerializer(todo_items, many= True)
    return  APIRespoense(payload.data, status = HTTP_200_OK)


@api_view(["GET"])
def detailed(request, todo_id):
    todo_item = get_object_or_404(TodoItem, id= todo_id)
    payload = TodoSerializer(todo_item)
    return APIRespoense(payload.data, status= HTTP_200_OK)


@api_view(["PUT"])
def upadte(request): ...

@api_view(["DELETE"])
def delete(request): ...
