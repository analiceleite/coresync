# Generated by Django 5.1 on 2024-08-22 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('perfil', '0002_alter_profileimage_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileimage',
            name='profile_image',
            field=models.TextField(default='C:\\Users\\LID2JVL\\Documents\\estudos\\coresync\\coresync\\backend\\media\\profile\\profile_image_default', verbose_name=False),
        ),
    ]
