# Generated by Django 4.2.11 on 2024-06-22 22:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_remove_review_phoneno_remove_review_subject'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='mailid',
        ),
    ]
