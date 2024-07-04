from django.urls import path
from .views import dischargedate

urlpatterns = [
    path('dirchargecalculate/', dischargedate.as_view()),
]