from ..models import tickets
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import TicketsSerializer

class TicketsViewSet (viewsets.ModelViewSet):
    queryset = tickets.objects.all()
    serializer_class = TicketsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
