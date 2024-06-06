from rest_framework import serializers
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Ticket
        fields = '__all__'
    
    # def create(self, validated_data):
    #     # Handle creation of Ticket instance with machine_map separately
    #     machine_map_data = validated_data.pop('machine_map')
    #     ticket = Ticket.objects.create(**validated_data)
    #     ticket.machine_map = machine_map_data
    #     ticket.save()
    #     return ticket