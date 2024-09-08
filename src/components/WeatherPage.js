import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchWeatherData } from '../api/openWeatherAPI';
import { PropagateLoader } from 'react-spinners'; 
import { IoReturnUpBackOutline } from "react-icons/io5";
import "../App.css";
import SmallMap from './SmallMap';

const WeatherPage = () => {
    const { cityName } = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const [feedbackGiven, setFeedbackGiven] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const handleLikeClick = () => {
        setFeedbackMessage("Thank you for giving feedback!");
        setFeedbackGiven(true);
    };

    const handleDislikeClick = () => {
        setFeedbackMessage("Thank you for giving feedback!");
        setFeedbackGiven(true);
    };

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await fetchWeatherData(cityName);
                setWeatherData(data);
            } catch (err) {
                setError('Unable to find the city weather');
            } finally {
                setLoading(false);
            }
        };
        getWeather();
    }, [cityName]);

    if (loading) {
        return <div className="loader-container"><PropagateLoader color="#36d7b7" /></div>;
    }

    if (error) {
        return (
            <div className="error-container">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="Error" className="error-image" />
                <p className="error-message">{error}</p>
            </div>
        );
    }

    const weatherCondition = weatherData.weather[0].main.toLowerCase();

    let bgImage;    
    if (weatherCondition.includes('clear')) {
        bgImage = 'https://cdn-icons-png.flaticon.com/512/3222/3222800.png';
    } else if (weatherCondition.includes('clouds')) {
        bgImage = 'https://cdn-icons-png.flaticon.com/512/4834/4834559.png';   
    } else if (weatherCondition.includes('rain')) {
        bgImage = 'https://c.tadst.com/gfx/w/svg/wt-18.svg';
    } else if (weatherCondition.includes('snow')) {
        bgImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjGJQsXdGdzdTrELBlZp_gBzWDZ802Z1bAw&s';
    } else if (weatherCondition.includes('thunderstorm')) {
        bgImage = 'https://c.tadst.com/gfx/w/svg/wt-22.svg';
    } else if (weatherCondition.includes('fog') || weatherCondition.includes('mist')) {
        bgImage = 'https://c.tadst.com/gfx/w/svg/wt-9.svg';
    } else {
        bgImage = 'default.jpg';
    }

    return (
        <div className="weather-page">  
        

            <div className='weather-header-card'>
                <h1 className='weather-header-heading'>Weather in {weatherData.name}</h1>
            </div> 

                       <Link to="/" className='back-button'> 
                                <button className='back-button-icon'>
                                    <i>back</i> 
                                    <IoReturnUpBackOutline />
                                </button>
                       </Link>
                        

           
            <div className='weather-card-main-container'> 
                <div className='weather-card-first'>  
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent:"space-between" ,margin:"10px"}} >
                        <div>
                            <h2>Now 
                            <br/>{Math.round(weatherData.main.temp - 273.15)}°C </h2> 
                            <p style={{ fontWeight: 'bold' }}>{weatherData.weather[0].description}.</p>     
                        </div>
                        <img className='weather-image' src={bgImage} alt=''/>
                    </div>

                    <div>
                        <p>Feels Like: {Math.round(weatherData.main.feels_like - 273.15)}°C</p> 
                        <p>Forecast: {Math.round(weatherData.main.temp_max - 273.15)}°C / {Math.round(weatherData.main.temp_min - 273.15)}°C</p> 
                        <p>Wind: {Math.round(weatherData.wind.speed * 3.6)} km/h ↑ from {weatherData.wind.deg}°</p>
                    </div> 
                </div>

                <div className='weather-card-second'>
                    <table className="table">
                        <tbody>
                            <tr> 
                                <th scope="col">Location:</th>
                                <td> {weatherData.name} / {weatherData.sys.country}</td>
                            </tr>
                            <tr>
                                <th scope="col">Current Time:</th>
                                <td>{new Date().toLocaleString()}</td>
                            </tr>
                            <tr>
                                <th scope="col">Latest Report:</th>
                                <td>{new Date(weatherData.dt * 1000).toLocaleString()}</td>
                            </tr> 
                            <tr>
                                <th scope="col">Visibility: </th>
                                <td>{weatherData.visibility / 1000} km</td>
                            </tr>
                            <tr>
                                <th scope="col">Pressure:</th>
                                <td>{weatherData.main.pressure} mbar</td>
                            </tr>
                            <tr>
                                <th scope="col">Humidity:</th>
                                <td>{weatherData.main.humidity}%</td>
                            </tr>
                            <tr>
                                <th scope="col">Dew Point:</th>
                                <td>{Math.round(weatherData.main.temp - 273.15)}°C</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='weather-card-third'>
                    <SmallMap lat={weatherData.coord.lat} lon={weatherData.coord.lon} cityName={weatherData.name} />
                </div>
            </div> 

            <div className='weather-footer-card'>
            {feedbackGiven ? (
                <p className='footer-text'>{feedbackMessage}</p>
            ) : (
                <> 
                <div className='feedback-card-container'>
                <p className='footer-text'>How is your experience?</p>
                    <div className='feedback-buttons'>
                        <button className='like-button' onClick={handleLikeClick}>👍</button>
                        <button className='dislike-button' onClick={handleDislikeClick}>👎 No</button>
                    </div>
                </div>
                   
                </>
            )}
        </div>


        </div>
    );
};

export default WeatherPage;
