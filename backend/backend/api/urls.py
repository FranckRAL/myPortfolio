from rest_framework.routers import DefaultRouter
from django.urls import path, include
from portfolio.api.urls import  base_router

router = DefaultRouter()

router.registry.extend(base_router.registry)

urlpatterns = [
    path("", include(router.urls)),
]