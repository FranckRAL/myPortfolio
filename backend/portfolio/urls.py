from rest_framework import routers
from .views import TechnologyViewSet, ProjectViewSet, VisitorViewSet, MessageViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'technologies', TechnologyViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'visitors', VisitorViewSet)
router.register(r'messages', MessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]