# Generated by Django 4.2.6 on 2023-10-23 12:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Todo", "0004_alter_todoitem_start"),
    ]

    operations = [
        migrations.AlterField(
            model_name="todoitem",
            name="start",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023, 10, 23, 12, 55, 50, 222726, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]
