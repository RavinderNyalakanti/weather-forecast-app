import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CitiesTable from './components/CitiesTable';
import WeatherPage from './components/WeatherPage';

function App() {
    return ( <
        Router >
        <
        Routes >

        <
        Route path = "/"
        element = { < CitiesTable / > }
        />  <
        Route path = "/weather/:cityName"
        element = { < WeatherPage / > }
        />  <
        /Routes> <
        /Router>
    );
}

export default App;