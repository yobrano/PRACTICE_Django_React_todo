# Generated by Django 4.2.6 on 2023-10-20 21:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Todo", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="todoitem",
            name="due",
        ),
        migrations.AddField(
            model_name="todoitem",
            name="end",
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="todoitem",
            name="start",
            field=models.DateTimeField(
                default=datetime.datetime(2023, 10, 21, 0, 42, 36, 246998)
            ),
        ),
    ]