from django.urls import path
from .views import dischargedate, calculate_view

urlpatterns = [
    path('dirchargecalculate/', dischargedate.as_view()),
    path('calculate/', calculate_view),
]