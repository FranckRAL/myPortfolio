from rest_framework.serializers import ModelSerializer
from portfolio.models import Post  # Import the Post model from your app
#     'ENGINE': 'django.db.backends.sqlite3',

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content')  # Include all fields from the Post model