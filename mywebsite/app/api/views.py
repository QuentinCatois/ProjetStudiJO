from ..models import tickets
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import TicketsSerializer

class TicketsViewSet (viewsets.ModelViewSet):
    queryset = tickets.objects.select_related('categories_id').order_by('name', 'categories_id').all()
    serializer_class = TicketsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
