# Generated by Django 4.2.11 on 2024-06-03 04:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Administration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
                ('privilege', models.BooleanField()),
                ('mailid', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PackageDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title1', models.CharField(max_length=50)),
                ('title2', models.CharField(max_length=50)),
                ('content', models.TextField(max_length=200)),
                ('img1', models.ImageField(upload_to='rectangle_image')),
                ('img2', models.ImageField(upload_to='round_image')),
                ('c1', models.CharField(max_length=30)),
                ('c2', models.CharField(max_length=30)),
                ('c3', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('phnumber', models.CharField(max_length=14)),
                ('mailid', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='patientdetails',
            name='appointmentdate',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='patientdetails',
            name='servicetype',
            field=models.CharField(default='Medical Treatment', max_length=30),
        ),
        migrations.AlterField(
            model_name='patientdetails',
            name='contact',
            field=models.CharField(max_length=14),
        ),
    ]
