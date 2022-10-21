from dataclasses import fields
from rest_framework import serializers
from home.models import Messages

class UserSerial(serializers.ModelSerializer):
    pass

class MessagesSerial(serializers.ModelSerializer):
    username = serializers.CharField(source = 'username.username')
    class Meta:
        model = Messages
        fields = ('username', 'image', 'readable', 'messages')
