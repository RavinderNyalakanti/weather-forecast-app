import axios from 'axios';

export const fetchCities = async(page = 0) => {
    const response = await axios.get(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&rows=10&start=${page * 10}&sort=name`
    );
    return response.data.records;
};

export const fetchWeatherData = async(cityName) => {
    const apiKey = 'YOUR_API_KEY_HERE';
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    );
    return response.data;
};