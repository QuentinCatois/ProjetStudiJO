from rest_framework import serializers
from ..models import tickets

class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = tickets #model to serialize
        fields = ['name',
                  'ville',
                  'categories_id',
                  'date',
                  'tickets_prix',
                  'thumbnail'] #fields we are intrested in