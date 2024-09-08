import React, { useState, useEffect } from 'react';
import { fetchCities } from '../api/openWeatherAPI';

const SearchBar = ({ setFilteredCities }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (query.length > 2) {
                const results = await fetchCities(query); // Assuming fetchCities accepts a query parameter
                const filteredResults = results.filter((city) =>
                    city.fields.name.toLowerCase().includes(query.toLowerCase())
                );
                setSuggestions(filteredResults);
            } else {
                setSuggestions([]);
            }
        };

        fetchData();
    }, [query]);

    const handleSelectCity = (city) => {
        setQuery(city.fields.name);
        setFilteredCities([city]); // Only show the selected city in the table
        setSuggestions([]); // Hide suggestions after selection
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a city..."
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((city, index) => (
                        <li key={index} onClick={() => handleSelectCity(city)}>
                            {city.fields.name}, {city.fields.country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
