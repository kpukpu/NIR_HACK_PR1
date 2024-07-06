from django.shortcuts import render
from .serializers import dischargeSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .discharge import discharge_date
from .calculate import calculate
from django.http import JsonResponse

# Create your views here.


class dischargedate(APIView):
    def post(self, request):
        serializer = dischargeSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.save()  # 입대 날짜 저장
            date = validated_data['date']
            d_date = dischargedate(date)
            
            return Response(d_date, status= status.HTTP_200_OK)


@csrf_exempt
def calculate_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        a = data['a']
        b = data['b']
        c = data['c']
        result = calculate(a,b,c)
        return JsonResponse({'result': result})
    return JsonResponse({'error': 'Invalid request method'}, status=400)
