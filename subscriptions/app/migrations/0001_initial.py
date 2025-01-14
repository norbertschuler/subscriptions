# Generated by Django 5.1.4 on 2024-12-31 14:44

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Subscription",
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
                ("name", models.CharField(max_length=255)),
                ("monthly_price", models.DecimalField(decimal_places=2, max_digits=10)),
                ("payment_method", models.CharField(max_length=255)),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("Telefon", "Telefon"),
                            ("Streaming", "Streaming"),
                            ("Software", "Software"),
                            ("Speicher", "Speicher"),
                            ("Media", "Media"),
                            ("Sonstiges", "Sonstiges"),
                        ],
                        max_length=50,
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="subscriptions",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
