from django.urls import path
from Todo import views


app_name = "Todo"
urlpatterns = [
    path("all-todo/", views.all, name= "all_todo"),
    path("detailed-todo/<todo_id>/",views.detailed, name= "detailed_todo"),
]