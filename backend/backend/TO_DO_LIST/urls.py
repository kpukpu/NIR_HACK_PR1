from django.urls import path
from .views import dischargedate, calculate_view, today_weather, weather_view

urlpatterns = [
    path('dischargedate/', dischargedate.as_view()),
    path('calculate/', calculate_view),
    path('weather/', weather_view)
]