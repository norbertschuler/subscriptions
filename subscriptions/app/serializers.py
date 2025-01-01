from app.models import Subscription
from rest_framework import serializers


# Serializers
class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = '__all__'
        fields = '__all__'
