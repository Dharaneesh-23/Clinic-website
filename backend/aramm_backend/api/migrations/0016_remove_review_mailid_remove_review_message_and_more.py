# Generated by Django 4.2.11 on 2024-06-22 22:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_review_mailid_review_phoneno_review_subject_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='mailid',
        ),
        migrations.RemoveField(
            model_name='review',
            name='message',
        ),
        migrations.RemoveField(
            model_name='review',
            name='phoneno',
        ),
        migrations.RemoveField(
            model_name='review',
            name='subject',
        ),
    ]