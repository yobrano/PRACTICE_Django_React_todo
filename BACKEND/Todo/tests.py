from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework.status import HTTP_200_OK

# Create your tests here.
class TodoItemTest(TestCase):
    def setUp(self) -> None:
        self.client = APIClient()

        self.urls = {
            "all_todo": "/todo/all-todo",
            "detailed_todo": "todo/deatiled-todo/",

        }

        return super().setUp()
    
    def test_get_all_todo(self):
        endpoint = self.urls["all_todo"]
        response = self.client.get(endpoint, format= "json")
        self.assertEquals(response.status_code, HTTP_200_OK)
        
    def test_get_all_todo(self):
        endpoint = self.urls["detailed_todo"] + "1/"
        response = self.client.get(endpoint, format= "json")
        self.assertEquals(response.status_code, HTTP_200_OK)
