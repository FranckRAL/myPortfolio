from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PostViewSet

# Create a router and register our viewset with it.
base_router = DefaultRouter()
base_router.register(r'posts', PostViewSet, basename='post')