from rest_framework import serializers
from ..models import tickets, categories_offres


class CategoriesOffresSerializer(serializers.ModelSerializer):
    class Meta:
        model = categories_offres
        fields = ['categories']  # Include the fields you want to serialize from categories_offres

class TicketsSerializer(serializers.ModelSerializer):
    categories_id = CategoriesOffresSerializer()  # Nested serializer for categories_offres field

    class Meta:
        model = tickets #model to serialize
        fields = ['id',
                  'name',
                  'ville',
                  'categories_id',
                  'date',
                  'tickets_prix',
                  'image',
                  'nombre_total_tickets'] #fields we are interested in