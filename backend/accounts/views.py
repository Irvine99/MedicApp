from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from .serializers import UserSerializer
from django_filters.rest_framework import DjangoFilterBackend

from .models import Service, Medecin, Intervention
from .serializers import ServiceSerializer, MedecinSerializer, InterventionSerializer
from rest_framework import viewsets, filters

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Utilisateur créé'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({'message': 'Connecté'}, status=status.HTTP_200_OK)
    return Response({'error': 'Identifiants invalides'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def user_logout(request):
    logout(request)
    return Response({'message': 'Déconnecté'}, status=status.HTTP_200_OK)


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class MedecinViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Medecin.objects.all()
    serializer_class = MedecinSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_fields = ['service']

class InterventionViewSet(viewsets.ModelViewSet):
    queryset = Intervention.objects.all()
    serializer_class = InterventionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['medecin', 'medecin__service', 'equipe', 'start', 'end']
