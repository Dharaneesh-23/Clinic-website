# Generated by Django 4.2.11 on 2024-06-03 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_administration_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='administration',
            name='password',
            field=models.CharField(max_length=30),
        ),
    ]