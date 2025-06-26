from django.db import models

# Create your models here.

class Service(models.Model): name = models.CharField(max_length=100)

class Medecin(models.Model):
    name = models.CharField(max_length=100)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    
class Intervention(models.Model):
    title = models.CharField(max_length=200)
    start = models.DateTimeField()
    end = models.DateTimeField()
    medecin = models.ForeignKey(Medecin, on_delete=models.CASCADE)
    equipe = models.CharField(max_length=100, blank=True)
    room = models.CharField(max_length=50, blank=True)
    notes = models.TextField(blank=True)
