# Generated by Django 4.2.11 on 2024-08-10 05:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0025_alter_subscription_email_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='BeforeAfterImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('BAimage', models.ImageField(upload_to='Before After Image')),
                ('package_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.packagedescription')),
            ],
        ),
    ]
