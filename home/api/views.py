from rest_framework.views import APIView, Response
from home.api.serializer import MessagesSerial
from django.http import HttpResponse, JsonResponse
from home.models import Messages

class MessagesApi(APIView):
    def get(self, request, *args, **kwargs):
        serial = MessagesSerial(Messages.objects.all(), many = True, context = {'request':request})
        return JsonResponse(serial.data, safe = False)

    def patch(self, request, *args, **kwargs):
        pass