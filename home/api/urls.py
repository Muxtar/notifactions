from django.urls import path
from home.api.views import MessagesApi

urlpatterns = [
    path('', MessagesApi.as_view(), name='api')
]