import React, {useEffect, useState} from "react";
import axios from "axios";

const TodayWeatherPage = () => {
    const [temp, setTemp] = useState([]);
    const [weather, setWeather] = useState([]);


    useEffect(() => {

        // API 요청을 보내는 함수
       const fetchWeatherData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/weather/');
                console.log(response.data.temp)
                setTemp(response.data.c_temp);
                setWeather(response.data._weather);
                console.log({temp}, {weather});
            } catch (error) {
                console.error('API 요청 중 에러가 발생했습니다.', error);
            }
        };
        fetchWeatherData()
            .then(() => {
                console.log("weather fetched successfully");
            })
            .catch(error => {
                console.error("Failed to fetch weather:", error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div style={{ margin: '0 auto', maxWidth: '600px', padding: '20px', textAlign: 'center' }}>
            <h1> 오늘의 날씨 </h1>
            <p>현재 온도: {temp ? temp : "로딩 중..."}</p>
            <p>현재 날씨: {weather ? weather : "로딩 중..."}</p>
        </div>
    )
}


export default TodayWeatherPage;