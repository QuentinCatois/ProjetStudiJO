"""
URL configuration for mywebsite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include # include -> add other URL configurations from application
from rest_framework.routers import DefaultRouter
from app.api.urls import tickets_router
from django.conf import settings
from django.views.static import serve
from app import views
from app.views import get_customer_id
from app.views import stripe_checkout_view
from app.views import send_email
from app.views import add_payment

router = DefaultRouter()
router.registry.extend(tickets_router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/',include('djoser.urls')), # Maps the URL /api/auth/ to Djoser's built-in authentication URLs. Djoser provides ready-to-use authentication endpoints for user registration, login, logout, password reset
    path('api/auth/', include('djoser.urls.jwt')), #Maps the URL /api/auth to Djoser's JWT (JSON Web Token) authentication URLs. Djoser JWT provides endpoints for token-based authentication, including token issuance and refreshing.
    path('api/tickets/', include(router.urls)),
    path('logo_tickets/<path:path>', serve, {'document_root': settings.LOGO_TICKETS_ROOT}),
    path('api/update_cart/', views.update_cart, name='add_to_cart'),
    path('get_customer_id/', get_customer_id, name='get_customer_id'),
    path('api/create_checkout_session/',  views.stripe_checkout_view, name='create_checkout_session'),
    path('api/send_email/',  views.send_email, name='send_email'),
    path('api/add_payment/', views.add_payment, name='add_payment'),
] 
