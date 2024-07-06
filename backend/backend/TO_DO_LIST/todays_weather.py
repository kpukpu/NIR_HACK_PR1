import requests
from bs4 import BeautifulSoup
import pandas as pd

def today_weather():
    url = 'https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=1&acq=%EC%98%A4%EB%8A%98%EC%9D%98%EB%82%A0%EC%94%A8+&qdt=0&ie=utf8&query=%EC%98%A4%EB%8A%98%EC%9D%98%EB%82%A0%EC%94%A8+'

    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    current_temp_span = soup.find('span', class_='blind', string='현재 온도')
    current_temp = current_temp_span.next_sibling.strip()

    weather_span = soup.find('span', class_='weather before_slash')
    weather_status = weather_span.get_text(strip=True)

    return {
        "temp" : current_temp,
        "weather" : weather_status
    }
