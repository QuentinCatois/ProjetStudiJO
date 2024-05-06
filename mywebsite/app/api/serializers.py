from rest_framework import serializers
from ..models import tickets

class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = tickets #model to serialize
        fields = ['name',
                  'ville',
                  'lieu',
                  'date',
                  'tickets_prix',
                  'thumbnail'] #fileds we are intrested in