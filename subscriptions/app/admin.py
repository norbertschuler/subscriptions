from app import models
from django.contrib import admin


# Register your models here.
@admin.register(models.Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ['name', 'monthly_price', 'user', 'payment_method', 'category']
    search_fields = ['name', 'category']
