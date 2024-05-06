from rest_framework.routers import DefaultRouter
from .views import TicketsViewSet

tickets_router = DefaultRouter()

tickets_router.register(r'tickets', TicketsViewSet)