# Generated by Django 3.1.4 on 2021-03-27 16:48

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('world', '0003_delete_worldborder'),
    ]

    operations = [
        migrations.AddField(
            model_name='campingspot',
            name='photo',
            field=models.ImageField(default=django.utils.timezone.now, upload_to='spots'),
            preserve_default=False,
        ),
    ]
