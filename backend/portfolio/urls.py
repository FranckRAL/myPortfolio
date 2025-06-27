from .views import (
    ProjectListCreateView, ProjectDetailView,
    ServiceListCreateView, MessageListCreateView,
    VisitorListCreateView, TechnologyListCreateView
)
from django.urls import path

urlpatterns = [
    path('projects/', ProjectListCreateView.as_view(), name='projects-list'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('services/', ServiceListCreateView.as_view(), name='services-list'),
    path('messages/', MessageListCreateView.as_view(), name='message-create'),
    path('visitors/', VisitorListCreateView.as_view(), name='visitor-create'),
    path('technologies/', TechnologyListCreateView.as_view(), name='technology-create'),
]