# Generated by Django 5.0.3 on 2024-04-08 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("userapp", "0004_alter_refillstockhistory_refill_date_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="profile_img",
            field=models.ImageField(
                blank=True, default="anonymous.jpg", null=True, upload_to="images/"
            ),
        ),
    ]
