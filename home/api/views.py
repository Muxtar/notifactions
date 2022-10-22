from rest_framework.views import APIView, Response
from rest_framework import status
from home.api.serializer import MessagesSerial
from django.http import HttpResponse, JsonResponse
from home.models import Messages

class MessagesApi(APIView):
    def get(self, request, *args, **kwargs):
        serial = MessagesSerial(Messages.objects.all(), many = True, context = {'request':request})
        return JsonResponse(serial.data, safe = False)

    def patch(self, request, *args, **kwargs):
        data = Messages.objects.filter(id = kwargs.get('pk'))
        if data:
            data = data[0]
            data.readable = False
            data.save()
            data = MessagesSerial(data, context = {'request':request})
            return Response(data.data, status=status.HTTP_201_CREATED)
        return Response({'status':'not found'}, status=status.HTTP_404_NOT_FOUND)