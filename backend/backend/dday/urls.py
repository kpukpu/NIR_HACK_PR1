from django.urls import path
from .views import calculate_dday

urlpatterns = [
    path('calculate_dday/', calculate_dday, name='calculate_dday')
]