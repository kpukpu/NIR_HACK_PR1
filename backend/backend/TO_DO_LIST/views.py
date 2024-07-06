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
from .todays_weather import today_weather
from django.http import JsonResponse
from datetime import datetime, timedelta

# Create your views here.
@csrf_exempt
def dischargedate(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            start_date_str = data['start_date']
            start_date = datetime.strptime(start_date_str, '%Y-%m-%d').date()
            day548 = timedelta(days=548)
            discharge_date = start_date + day548
            return JsonResponse({'start_date': discharge_date.strftime('%Y-%m-%d')})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

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

@csrf_exempt
def weather_view(request):
    result = today_weather()
    return JsonResponse(result)