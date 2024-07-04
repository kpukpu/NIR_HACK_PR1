from django.shortcuts import render
from .serializers import dischargeSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .discharge import discharge_date
# Create your views here.


class dischargedate(APIView):
    def post(self, request):
        serializer = dischargeSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.save()  # 입대 날짜 저장
            date = validated_data['date']
            d_date = dischargedate(date)
            
            return Response(d_date, status= status.HTTP_200_OK)
