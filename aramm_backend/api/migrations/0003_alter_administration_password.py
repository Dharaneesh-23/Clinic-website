# Generated by Django 4.2.11 on 2024-06-03 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_administration_packagedetails_reviews_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='administration',
            name='password',
            field=models.CharField(max_length=128),
        ),
    ]
