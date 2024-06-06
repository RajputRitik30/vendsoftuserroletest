from django.db import models
from tenant.models import Tenant
from userapp.models import User
from machinedataapp.models import MachineUserMapping,MachineMaster

# Create your models here.
class Ticket(models.Model):
    tenant = models.CharField(max_length=100, null=True, blank=True)
    user = models.CharField(max_length=100, null=True, blank=True)
    machine_mapping=models.CharField(max_length=100, null=True, blank=True)
    machine_map=models.CharField(max_length=100, null=True, blank=True)
    title = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(max_length=500,null=True, blank=True)
    notes=models.TextField(max_length=500,null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    resolved_at = models.DateTimeField(null=True, blank=True)
    priority = models.CharField(max_length=10,  default='LOW')
    status = models.CharField(max_length=20, default='CREATED')
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_tickets')
    problem_type = models.CharField(max_length=10, null=True, blank=True)
    ticsrno = models.CharField(max_length=50, unique=True, null=True,blank=True)
    created_by = models.CharField(max_length=100, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    updated_by = models.CharField(max_length=100, null=True, blank=True)
