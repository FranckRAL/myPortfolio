from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Project, Service, Message, Visitor, Technology
from .serializers import ProjectSerializer, ServiceSerializer, MessageSerializer, VisitorSerializer, TechnologySerializer

class ProjectListCreateView(APIView):
    def get_permissions(self):
        if self.request.method == 'POST':
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]

    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProjectDetailView(APIView):
    def get_permissions(self):
        if self.request.method in ['PUT', 'DELETE']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]

    def get_object(self, pk):
        try:
            return Project.objects.get(pk=pk)
        except Project.DoesNotExist:
            return None

    def get(self, request, pk):
        project = self.get_object(pk)
        if not project:
            return Response({'detail': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProjectSerializer(project, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk):
        project = self.get_object(pk)
        if not project:
            return Response({'detail': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        project = self.get_object(pk)
        if not project:
            return Response({'detail': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class ServiceListCreateView(APIView):
    def get_permissions(self):
        if self.request.method in [ 'DELETE', 'PUT']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    
    def get(self, request):
        projects = Service.objects.all()
        serializer = ServiceSerializer(projects, many=True, context={'request': request})
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MessageListCreateView(APIView):
    def get_permissions(self):
        if self.request.method in ['GET', 'DELETE']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    
    def get(self, request):
        projects = Message.objects.all()
        serializer = MessageSerializer(projects, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class VisitorListCreateView(APIView):
    def get_permissions(self):
        if self.request.method in [ 'GET', 'DELETE']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    
    def get(self, request):
        projects = Visitor.objects.all()
        serializer = VisitorSerializer(projects, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        # Get IP from request if not provided
        ip_address = request.data.get('ip_address') or request.META.get('REMOTE_ADDR')
        user_agent = request.data.get('user_agent') or request.META.get('HTTP_USER_AGENT')
        data = {
            'ip_address': ip_address,
            'user_agent': user_agent,
        }
        serializer = VisitorSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class TechnologyListCreateView(APIView):
    def get_permissions(self):
        if self.request.method in [ 'PUT', 'DELETE', 'UPDATE']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    
    def get(self, request):
        projects = Technology.objects.all()
        serializer = TechnologySerializer(projects, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = TechnologySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)