# Generated by Django 4.1.2 on 2022-10-14 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messages',
            name='image',
            field=models.ImageField(upload_to='messages'),
        ),
    ]
