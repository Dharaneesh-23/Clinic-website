# Generated by Django 4.2.11 on 2024-08-09 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0024_subscription'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscription',
            name='email_id',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
