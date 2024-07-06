from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime

@api_view(['POST'])
def calculate_dday(request):
    try:
        target_date_str = request.data.get('target_date')
        target_date = datetime.strptime(target_date_str, '%Y-%m-%d').date()
        today = datetime.today().date()
        days_left = (target_date - today).days

        return Response({'days_left': days_left}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)