import axios from 'axios';

export const fetchCities = async(page = 0) => {
    const response = await axios.get(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&rows=50&start=${page * 50}&sort=name`
    );
    return response.data.records;
};

export const fetchWeatherData = async(cityName) => {
    const apiKey = 'daae47df3ae0f95ed4d4ccb437380924';
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    );
    return response.data;
};