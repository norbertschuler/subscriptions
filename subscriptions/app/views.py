from app.models import Subscription
from app.serializers import SubscriptionSerializer
from rest_framework import viewsets


# Create your views here.
# ViewSets
class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscription.objects.all().order_by('name')
    serializer_class = SubscriptionSerializer
