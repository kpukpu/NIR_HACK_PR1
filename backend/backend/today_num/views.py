from django.shortcuts import render
import random
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

@api_view(['POST'])
def today_num(request):
    num = random.randint(1, 1000)
    return Response({'today_num' : num}, status=status.HTTP_200_OK)