from rest_framework.viewsets import ModelViewSet
from portfolio.models import Post
from .serializers import PostSerializer

class PostViewSet(ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer