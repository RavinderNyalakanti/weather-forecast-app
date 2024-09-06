import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWeatherData } from '../api/openWeatherAPI';

const WeatherPage = () => {
    const { cityName } = useParams();
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getWeather = async() => {
            const data = await fetchWeatherData(cityName);
            setWeatherData(data);
        };
        getWeather();
    }, [cityName]);

    if (!weatherData) {
        return <div > Loading... < /div>;
    }

    return ( <
        div >
        <
        h1 > Weather in { weatherData.name } < /h1> <
        p > Temperature: { Math.round(weatherData.main.temp - 273.15) }°
        C < /p> <
        p > Weather: { weatherData.weather[0].description } < /p> <
        p > Humidity: { weatherData.main.humidity } % < /p> <
        p > Wind Speed: { weatherData.wind.speed }
        m / s < /p> <
        p > Pressure: { weatherData.main.pressure }
        hPa < /p> <
        /div>
    );
};

export default WeatherPage;