# Generated by Django 4.2.11 on 2024-06-22 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_reviews_phoneno_reviews_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reviews',
            name='subject',
            field=models.CharField(max_length=150),
        ),
    ]
