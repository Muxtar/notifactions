from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model


User = get_user_model()

# Create your models here.
# id: 1,
# username: 'Rufet Nuriyev',
# image: 'avatar-angela-gray.webp',
# move: 'followed you',
# note: 'Chess club',
# date: '5m ago',
# readable: false,
# message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptates necessitatibus accusantium numquam, assumenda aliquid consectetur. Eaque porro sunt vero, ad tempora excepturi eligendi quo quae aut nobis minima? Debitis'


class Messages(models.Model):
    username = models.ForeignKey(User, related_name = 'message', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='messages') 
    readable = models.BooleanField()
    messages = models.TextField()

    def __str__(self) -> str:
        return self.username.username