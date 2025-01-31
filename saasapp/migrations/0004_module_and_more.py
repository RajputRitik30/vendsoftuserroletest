# Generated by Django 5.0.3 on 2024-04-18 11:15

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("saasapp", "0003_modulepermission_modulemasterpermission"),
        ("tenant", "0002_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Module",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("module", models.CharField(blank=True, max_length=100, null=True)),
                ("is_active", models.BooleanField(blank=True, default=True, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True, null=True)),
                ("created_by", models.IntegerField(blank=True, null=True)),
                ("updated_by", models.IntegerField(blank=True, null=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name="modulemasterpermission",
            name="modulepermission",
        ),
        migrations.RemoveField(
            model_name="modulemasterpermission",
            name="tenant",
        ),
        migrations.AlterField(
            model_name="companyregistration",
            name="user",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL
            ),
        ),
        migrations.CreateModel(
            name="ModuleMapping",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("is_active", models.BooleanField(blank=True, default=True, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True, null=True)),
                ("created_by", models.IntegerField(blank=True, null=True)),
                ("updated_by", models.IntegerField(blank=True, null=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True, null=True)),
                (
                    "module_type",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="saasapp.module",
                    ),
                ),
                (
                    "tenant",
                    models.OneToOneField(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="tenant.tenant",
                    ),
                ),
                (
                    "user_id",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.DeleteModel(
            name="ModulePermission",
        ),
        migrations.DeleteModel(
            name="ModuleMasterPermission",
        ),
    ]
