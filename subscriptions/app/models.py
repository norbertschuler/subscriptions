from django.contrib.auth.models import User
from django.db import models


# Models
class Subscription(models.Model):
    CATEGORY_CHOICES = [
        ('Telefon', 'Telefon'),
        ('Streaming', 'Streaming'),
        ('Software', 'Software'),
        ('Speicher', 'Speicher'),
        ('Media', 'Media'),
        ('Sonstiges', 'Sonstiges'),
    ]

    name = models.CharField(max_length=255)
    monthly_price = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.CharField(max_length=255)
    payment_method = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)

    def __str__(self):
        return f"{self.name} ({self.category}) - {self.user}"
