from django.urls import path
from .views import today_num

urlpatterns = [
    path('today_num/', today_num)
]