# Generated by Django 4.2.11 on 2024-12-14 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0029_remove_packagedetails_c1_remove_packagedetails_c2_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userName', models.CharField(max_length=255)),
                ('phoneNumber', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('gender', models.CharField(max_length=6)),
                ('starCount', models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=5)),
                ('review', models.TextField()),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
