import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchCities } from '../api/openWeatherAPI';
import SearchBar from './SearchBar';
import Table from 'react-bootstrap/Table';

const CitiesTable = () => {
    const [cities, setCities] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [filteredCities, setFilteredCities] = useState([]);

    const loadMoreCities = async() => {
        const newCities = await fetchCities(page);
        if (newCities.length === 0) {
            setHasMore(false);
            return;
        }
        setCities([...cities, ...newCities]);
        setFilteredCities([...cities, ...newCities]);
        setPage(page + 1);
    };

    useEffect(() => {
        loadMoreCities();
    }, []);
    return ( <
        div >
        <
        SearchBar setFilteredCities = { setFilteredCities }
        /> <
        InfiniteScroll dataLength = { filteredCities.length }
        next = { loadMoreCities }
        hasMore = { hasMore }
        loader = { < h4 > Loading... < /h4>} > 

            <
            Table striped = "columns"
            color = 'red' >
            <
            thead >
            <
            tr >
            <
            th > # < /th> <
            th > City Name < /th> <
            th > Country < /th> <
            th > Timezone < /th> < /
            tr > <
            /thead>  <

            tbody >
            <
            tr >
            <
            td > 1 < /td> <
            td > Mark < /td> <
            td > Otto < /td> <
            td > @mdo < /td> < /
            tr > <
            tr >
            <
            td > 2 < /td> <
            td > Jacob < /td> <
            td > Thornton < /td> <
            td > @fat < /td> < /
            tr > <
            tr >
            <
            td > 3 < /td> <
            td colSpan = { 2 } > Larry the Bird < /td> <
            td > @twitter < /td> < /
            tr > <
            /tbody>  <
            /
            Table >


            <
            table className = "min-w-full table-auto" >
            <
            thead >
            <
            tr >
            <
            th > < /th> <
            th > < /th> <
            th > < /th> < /
            tr >

            <
            /thead> <tbody > {
            filteredCities.map((city, index) => ( <
                tr key = { index } >
                <
                td >
                <
                Link to = { `/weather/${city.fields.name}` } > { city.fields.name } <
                /Link> < /
                td > <
                td > { city.fields.country } < /td> <
                td > { city.fields.timezone } < /td> < /
                tr >
            ))
        }

        <
        /tbody>  < /table >

        <
        /InfiniteScroll> </div >
    );
};

export default CitiesTable;