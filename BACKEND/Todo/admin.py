from django.contrib import admin
from Todo.models import TodoItem, TodoItemAdminModel

# Custom Admin sites
class TodoAdminSite(admin.AdminSite):
    site_header = "Todo Admin"
    site_title = "Task Admin"


todo_admin_site = TodoAdminSite(name= "TodoAdmin")

# Register your models here.
todo_admin_site.register(TodoItem, TodoItemAdminModel)
admin.site.register([TodoItem])