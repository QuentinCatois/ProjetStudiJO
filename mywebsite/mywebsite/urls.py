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

router = DefaultRouter()
router.registry.extend(tickets_router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/',include('djoser.urls')), # Maps the URL /api/auth/ to Djoser's built-in authentication URLs. Djoser provides ready-to-use authentication endpoints for user registration, login, logout, password reset
    path('api/auth/', include('djoser.urls.jwt')), #Maps the URL /api/auth to Djoser's JWT (JSON Web Token) authentication URLs. Djoser JWT provides endpoints for token-based authentication, including token issuance and refreshing.
    path('api/tickets/', include(router.urls))
]
