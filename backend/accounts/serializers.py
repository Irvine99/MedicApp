from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Service, Medecin, Intervention

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data.get('email', '')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class ServiceSerializer(serializers.ModelSerializer):
    class Meta: model = Service; fields = '__all__'

class MedecinSerializer(serializers.ModelSerializer):
    class Meta: model = Medecin; fields = '__all__'

class InterventionSerializer(serializers.ModelSerializer):
    medecin = MedecinSerializer()
    class Meta: model = Intervention; fields = '__all__'