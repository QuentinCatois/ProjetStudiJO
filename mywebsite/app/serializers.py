from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer # To create user account with special fields
from rest_framework import serializers
from . import models
from .models import Cart

UserAccount = get_user_model() # retrieves the user class model from models.py

class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = UserAccount # model used for the serializer
        fields = ['id', 'email', 'first_name', 'last_name', 'password'] # fields that should be included in the serializer

class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.tickets
        fields = ['id', 'name', 'ville', 'lieu', 'date', 'categories_id', 'tickets_prix', 'nombre_total_tickets', 'image', 'slug']

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'title', 'category', 'price', 'quantity']
