# Generated by Django 5.0.6 on 2024-08-27 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('perfil', '0008_alter_profileimage_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileimage',
            name='profile_image',
            field=models.TextField(default='C:\\Users\\LEA5JVL\\Documents\\Projetos\\coresync\\backend\\media\\profile\\profile_image_default.png', verbose_name=False),
        ),
    ]
