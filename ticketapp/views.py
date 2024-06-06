from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
import logging
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet

class TicketViewSet(ModelViewSet):
    queryset = MachineMaster.objects.all()
    serializer_class = TicketSerializer
    permission_classes=[IsAuthenticated]

    def list(self, request, *args, **kwargs):
        try:
            queryset = Ticket.objects.all().order_by('-id')
            serializer = TicketSerializer(queryset, many=True)
            return Response({'success': 1, 'message': 'Manage Membership List', 'result': serializer.data})
        except Exception as e:
            return Response({'success': 0, 'message': 'Not Found', 'result': str(e)})

    def retrieve(self, request, pk, *args, **kwargs):
        try:
            chp = Ticket.objects.get(pk=pk)
            serializer = TicketSerializer(chp)
            return Response({'success': 1, 'message': 'Manage Membership', 'result': serializer.data})
        except MachineMaster.DoesNotExist:
            return Response({'success': 0, 'message': 'Not Found'})

    def create(self, request, *args, **kwargs):
        try:
            serializer = TicketSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            
            return Response({'success': 1, 'message': 'Data Created', 'result': serializer.data})
        except Exception as e:
            return Response({'success': 0, 'message': 'Not Created', 'result': f'An error occurred: {str(e)}'})

    def update(self, request, pk, *args, **kwargs):
        try:
            chp = Ticket.objects.get(pk=pk)
            
            serializer = TicketSerializer(chp, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'success': 1, 'message': 'Data Updated', 'result': serializer.data})
        except MachineMaster.DoesNotExist:
            return Response({'success': 0, 'message': 'Not Found'})

    def destroy(self, request, pk, *args, **kwargs):
        try:
            machine = Ticket.objects.get(pk=pk)

           

            machine.delete()
            # chp = MachineMaster.objects.get(pk=pk)
            # chp.delete()
            return Response({'success': 1, 'message': 'Data Deleted'})
        except MachineMaster.DoesNotExist:
            return Response({'success': 0, 'message': 'Not Found'})
# Create your views here.
from django.core.exceptions import ObjectDoesNotExist
import uuid
from django.utils.timezone import now


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_ticket(request, pk):
    try:
        user_profile = request.user
        ticket = get_object_or_404(Ticket, pk=pk)
        
        if user_profile.role == '1':  # Superuser can update any ticket
            pass
        elif user_profile.role == '2':  # Admin can update tickets created by their own users
            own_users = User.objects.filter(created_by=user_profile.id)
            if ticket.user not in own_users and ticket.created_by not in own_users:
                return Response({'error': 'You do not have permission to update this ticket.'}, status=status.HTTP_403_FORBIDDEN)
        elif user_profile.role == '3':  # Customer can update their own tickets and those created by their own users
            own_users = User.objects.filter(created_by=user_profile.id)
            if ticket.user not in own_users and ticket.created_by not in own_users and ticket.created_by != user_profile:
                return Response({'error': 'You do not have permission to update this ticket.'}, status=status.HTTP_403_FORBIDDEN)
        else:  # Other roles cannot update tickets
            return Response({'error': 'You do not have permission to update this ticket.'}, status=status.HTTP_403_FORBIDDEN)
        
        # Update fields manually
        ticket_fields = ['title', 'description', 'notes', 'priority', 'status', 'assigned_to']
        for field in ticket_fields:
            if field in request.data:
                setattr(ticket, field, request.data[field])
        
        ticket.save()
        
        data = {
            'id': ticket.id,
            'machine_map': ticket.machine_map.machine_id if ticket.machine_map else None,
            'user': ticket.user.id if ticket.user else None,
            'title': ticket.title,
            'description': ticket.description,
            'notes': ticket.notes,
            'priority': ticket.priority,
            'problem_type': ticket.problem_type,
            'ticsrno': ticket.ticsrno,
            'created_at': ticket.created_at,
            'status': ticket.status,
            'created_by': ticket.created_by.id if ticket.created_by else None
        }
        
        return Response({'success': 1, 'message': 'Ticket updated successfully', 'result': data}, status=status.HTTP_200_OK)
    
    except Ticket.DoesNotExist:
        return Response({'error': 'Ticket not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_machine_mapped(request):
    if request.user.is_authenticated:
        try:
            # Check if the authenticated user is an assigned customer
            machine_user_mappings = MachineUserMapping.objects.filter(assigned_customer=request.user)
            
            # If the user is not an assigned customer, check if they are an assigned user
            if not machine_user_mappings.exists():
                machine_user_mappings = MachineUserMapping.objects.filter(assigned_user=request.user)
            
            if machine_user_mappings.exists():
                mapped_machines_data = []
                for mapping in machine_user_mappings:
                    # Access machine details through the mapping object
                    machine_data = {
                        'id':mapping.machine.id if mapping.machine else None,
                        'machine_id': mapping.machine.machine_id if mapping.machine else None,  
                        # 'mapping_details': MachineUserMappingSerializer(mapping).data
                    }
                    mapped_machines_data.append(machine_data)
                
                return Response({'success': 1, 'message': 'Mapped machines retrieved successfully', 'result': mapped_machines_data}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "User does not have any mapped machines"}, status=status.HTTP_404_NOT_FOUND)
        except MachineUserMapping.DoesNotExist:
            return Response({"message": "User does not have any mapped machines"}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response({"detail": "Authentication credentials were not provided"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_ticket_list_customer(request):
    try:
        # Fetch user_id from the request
        user_id = request.user.id
        print(user_id, 'user ID')

        tenant_id = Tenant.objects.get(schema_name=request.tenant).id
        print(tenant_id, 'tenant ID')

        with connection.cursor() as cursor:
            query = """
                SELECT
                    t.id, t.machine_map, t.title, t.description, t.notes,
                    t.priority, t.problem_type, t.ticsrno, t.created_at, t.status,
                    u.email, u.name
                FROM ticketapp_ticket t
                LEFT JOIN userapp_user u ON t.user = CAST(u.id AS VARCHAR)
                WHERE t.tenant = %s AND t.user = %s
            """
            params = [str(tenant_id), str(user_id)]
            print(f'Executing query: {query % tuple(params)}')  # Print the query for debugging

            cursor.execute(query, params)
            rows = cursor.fetchall()
            print(f'Data fetched: {rows}')  # Debugging print for fetched data
            
            
            data = []
            for row in rows:
                ticket = {
                    'id': row[0],
                    'machine_map': row[1],
                    'title': row[2],
                    'description': row[3],
                    'notes': row[4],
                    'priority': row[5],
                    'problem_type': row[6],
                    'ticsrno': row[7],
                    'created_at': row[8],
                    'status': row[9]
                }
                data.append(ticket)
        
        return Response({'success': 1, 'message': 'Data Found', 'result': data})

    except Tenant.DoesNotExist:
        return Response({'success': 0, 'message': 'Tenant not found'}, status=404)
    except Exception as e:
        logging.error(f'Error retrieving tickets: {str(e)}')
        return Response({'success': 0, 'message': 'Internal Server Error', 'error': str(e)}, status=500)

from django.db import connection, IntegrityError

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_ticket(request):
    user = request.user.id
    tenant = request.tenant
    tenant_id = Tenant.objects.get(schema_name=tenant.schema_name)
    print(tenant_id, 'tenant')
    machine_id = request.data.get('machine_map')
    title = request.data.get('title')
    description = request.data.get('description')
    notes = request.data.get('notes')
    priority = request.data.get('priority', 'MEDIUM')
    problem_type = request.data.get('problem_type')
    errors = {}

    if not machine_id:
        errors['machine_id'] = 'Machine ID is required'
    else:
        try:
            machine_master = MachineMaster.objects.get(machine_id=machine_id)
        except ObjectDoesNotExist:
            errors['machine_id'] = f'Machine with ID {machine_id} does not exist'

    if errors:
        return Response({'success': 0, 'message': 'Validation Errors', 'result': errors}, status=status.HTTP_400_BAD_REQUEST)

    try:
        ticket = Ticket.objects.create(
            user=user,
            tenant=tenant_id.id,
            machine_map=machine_master,
            title=title,
            description=description,
            notes=notes,
            priority=priority,
            problem_type=problem_type,
            ticsrno=generate_ticsrno()
        )
        response_data = {
            'id': ticket.id,
            'machine_map_id': ticket.machine_map.id,
            'title': ticket.title,
            'description': ticket.description,
            'notes': ticket.notes,
            'priority': ticket.priority,
            'problem_type': ticket.problem_type,
            'created_at': ticket.created_at,
            'ticsrno': ticket.ticsrno
        }
        return Response({'success': 1, 'message': 'Ticket Created Successfully', 'result': response_data}, status=status.HTTP_201_CREATED)
    except IntegrityError:
        return Response({'success': 0, 'message': 'Error creating ticket', 'result': f'Machine master ID {machine_id} does not exist or foreign key constraint violated'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        logging.error(f'Error saving ticket: {str(e)}')
        return Response({'success': 0, 'message': 'Error creating ticket', 'result': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

def generate_ticsrno():
    return f"TICK-{now().strftime('%Y%m%d')}-{uuid.uuid4().hex[:6].upper()}"

from tenant.models import Domain
def get_domain(self, request):
    domain_name = request.get_host().split(':')[0]  # Get the domain name from the request
    print(domain_name,'jjfjj')
    return Domain.objects.get(domain=domain_name)


from django.db import connection

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ticket_list(request):
    try:
        # Get tenant information
        tenant = request.tenant
        tenant_id = Tenant.objects.get(schema_name=tenant.schema_name).id
        
        # Get user profile
        user_profile = User.objects.get(email=request.user.email)
        
        # Initialize the tickets list
        tickets = []

        if request.method == 'GET':
            if user_profile.role == '1':  # Superuser
                # Superuser sees all tickets for the tenant
                with connection.cursor() as cursor:
                    cursor.execute("""
                        SELECT
                            id, machine_map, title, description, notes,
                            priority, problem_type, ticsrno, created_at, status
                        FROM ticketapp_ticket
                        WHERE tenant = %s
                    """, [str(tenant_id)])
                    rows = cursor.fetchall()
                    
                    for row in rows:
                        ticket = {
                            'id': row[0],
                            'machine_map': row[1],
                            'title': row[2],
                            'description': row[3],
                            'notes': row[4],
                            'priority': row[5],
                            'problem_type': row[6],
                            'ticsrno': row[7],
                            'created_at': row[8],
                            'status': row[9]
                        }
                        tickets.append(ticket)
            elif user_profile.role == '2':  # Admin
                # Admin sees all tickets for the tenant
                with connection.cursor() as cursor:
                    cursor.execute("""
                        SELECT
                            t.id, t.machine_map, t.title, t.description, t.notes,
                            t.priority, t.problem_type, t.ticsrno, t.created_at, t.status,
                            u.email, u.name
                        FROM ticketapp_ticket t
                        LEFT JOIN userapp_user u ON t.user = CAST(u.id AS VARCHAR)
                        WHERE t.tenant = %s
                    """, [str(tenant_id)])
                    rows = cursor.fetchall()
                    columns = [col[0] for col in cursor.description]

                    for row in rows:
                        ticket = dict(zip(columns, row))
                        tickets.append({
                            'id': ticket['id'],
                            'machine_map': ticket['machine_map'],
                            'email': ticket['email'],
                            'name': ticket['name'],
                            'title': ticket['title'],
                            'description': ticket['description'],
                            'notes': ticket['notes'],
                            'priority': ticket['priority'],
                            'problem_type': ticket['problem_type'],
                            'ticsrno': ticket['ticsrno'],
                            'created_at': ticket['created_at'],
                            'status': ticket['status']
                        })
            else:  # Other roles
                # Other roles see only their own tickets
                with connection.cursor() as cursor:
                    cursor.execute("""
                        SELECT
                            id, machine_map, title, description, notes,
                            priority, problem_type, ticsrno, created_at, status
                        FROM ticketapp_ticket
                        WHERE tenant = %s AND user = %s
                    """, [str(tenant_id), str(user_profile.id)])
                    rows = cursor.fetchall()
                    
                    for row in rows:
                        ticket = {
                            'id': row[0],
                            'machine_map': row[1],
                            'title': row[2],
                            'description': row[3],
                            'notes': row[4],
                            'priority': row[5],
                            'problem_type': row[6],
                            'ticsrno': row[7],
                            'created_at': row[8],
                            'status': row[9]
                        }
                        tickets.append(ticket)

            return Response({'success': 1, 'message': 'Data Found', 'result': tickets})

    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)
    except Tenant.DoesNotExist:
        return Response({'error': 'Tenant not found'}, status=404)
    except Exception as e:
        return Response({'error': str(e)}, status=500)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def assign_ticket(request):
    try:
        # Check if the user has permission to assign a ticket
        user = User.objects.get(id=request.user.id)
        
        if user.role != '2':
            return Response({'success': 0, 'message': 'Permission denied'}, status=403)

        # Extract data from the request
        data = request.data
        ticket_id = data.get('ticket_id')
        assigned_user_id = data.get('assigned_user_id')

        # Validate that the ticket and user exist
        cursor = connection.cursor()
        cursor.execute("SELECT id FROM ticketapp_ticket WHERE id = %s", [ticket_id])
        ticket_row = cursor.fetchone()
        if not ticket_row:
            return Response({'success': 0, 'message': 'Invalid ticket ID'}, status=400)

        cursor.execute("SELECT id FROM userapp_user WHERE id = %s AND role = '1'", [assigned_user_id])
        assigned_user_row = cursor.fetchone()
        if assigned_user_row:
            return Response({'success': 0, 'message': 'Only superadmins can be assigned tickets'}, status=400)

        # Assign the ticket to the specified user
        cursor.execute("UPDATE ticketapp_ticket SET assigned_to_id = %s WHERE id = %s", [assigned_user_id, ticket_id])
        connection.commit()

        return Response({'success': 1, 'message': 'Ticket assigned successfully'}, status=200)

    except Exception as e:
        return Response({'success': 0, 'message': str(e)}, status=500)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_assigned_tickets(request):
    try:
        # Get the authenticated user
        user = request.user

        # Fetch tickets assigned to the user
        assigned_tickets = Ticket.objects.filter(assigned_to=user)

        # Serialize the queryset into JSON response
        serialized_tickets = []
        for ticket in assigned_tickets:
            serialized_tickets.append({
                'id': ticket.id,
                'machine_id': ticket.machine_map,
                'title': ticket.title,
                'description': ticket.description,
                'notes': ticket.notes,
                'priority': ticket.priority,
                'problem_type': ticket.problem_type,
                'ticsrno': ticket.ticsrno,
                'created_at': ticket.created_at,
                'status': ticket.status
            })

        return Response({'success': 1, 'message': 'Assigned tickets fetched successfully', 'tickets': serialized_tickets})

    except Exception as e:
        return Response({'success': 0, 'message': str(e)}, status=500)