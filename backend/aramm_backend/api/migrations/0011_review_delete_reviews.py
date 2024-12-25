# Generated by Django 4.2.11 on 2024-06-22 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_reviews_phoneno_alter_reviews_subject'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('subject', models.CharField(max_length=250)),
                ('phoneno', models.CharField(max_length=20)),
                ('mailid', models.CharField(max_length=50)),
                ('message', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='Reviews',
        ),
    ]
