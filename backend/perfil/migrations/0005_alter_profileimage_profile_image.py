# Generated by Django 5.1 on 2024-08-22 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('perfil', '0004_alter_profileimage_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileimage',
            name='profile_image',
            field=models.TextField(default='C:\\Users\\Analice\\OneDrive\\Documents\\Projetos\\coresync\\backend\\media\\profile\\profile_image_default', verbose_name=False),
        ),
    ]
