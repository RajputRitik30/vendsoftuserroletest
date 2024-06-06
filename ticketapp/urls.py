from django.urls import path,include
from ticketapp import views
from rest_framework.routers import DefaultRouter
from ticketapp.views import *
router = DefaultRouter()
router.register(r'ticket', TicketViewSet, basename='ticket')

urlpatterns = [
    path('', include(router.urls)),
    # ticket create
    path('create_ticket/', views.create_ticket, name='create_ticket'),
    path('ticket_list/', views.ticket_list, name='ticket_list'),
    path('update_ticket/<int:pk>/', views.update_ticket, name='update_ticket'),
    path('user_machine_mapped/', views.user_machine_mapped, name='user_machine_mapped'),
    path('get_ticket_list_customer/', views.get_ticket_list_customer, name='get_ticket_list_customer'),
    
    #transfer ticket
    path('assign_ticket/', views.assign_ticket, name='assign_ticket'),
    path('get_assigned_tickets/', views.get_assigned_tickets, name='get_assigned_tickets'),

    
]
