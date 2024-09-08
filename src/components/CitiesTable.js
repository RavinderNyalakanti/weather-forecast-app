import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchCities } from '../api/openWeatherAPI';
import Table from 'react-bootstrap/Table'; 
import { BeatLoader  } from 'react-spinners'; 
import '../App.css';

const CitiesTable = () => {
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [filteredCities, setFilteredCities] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [loading, setLoading] = useState(true); // Track loading state
    const [searchPerformed, setSearchPerformed] = useState(false);

    const loadMoreCities = async () => {
        const newCities = await fetchCities(page);
        if (newCities.length === 0) {
            setHasMore(false);
            setLoading(false);
            return;
        }
        const updatedCities = [...cities, ...newCities];
        setCities(updatedCities);
        setFilteredCities(updatedCities);
        setPage(prevPage => prevPage + 1);
        setLoading(false); // Data has been loaded, stop loading
    };

    useEffect(() => {
        loadMoreCities();
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearch(query);
        setSearchPerformed(true);

        const filtered = cities.filter(city =>
            city.fields.name.toLowerCase().includes(query) ||
            city.fields.cou_name_en.toLowerCase().includes(query)
        );
        setFilteredCities(filtered);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
        const sortedCities = [...filteredCities].sort((a, b) => {
            if (a.fields[key] < b.fields[key]) return direction === 'asc' ? -1 : 1;
            if (a.fields[key] > b.fields[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setFilteredCities(sortedCities);
    };

    const getSortDirection = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'asc' ? '▲' : '▼';
        }
        return '';
    };

    return (
        <div className='mt-5 bg-primary main-card-container'>
            <div className='header-card'>
                <h1 className='font-weight-bold heading-card heading-card-text'>Weather Forecast Of Countries And Cities</h1>
            </div>

            {/* Search Input */}
            <div className="search-bar search-input-card">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search for a city or country..."
                    className="form-control"
                />
            </div>

            <div className='m-4 table-card-container'>
                {loading ? (
                    <div className="text-center loading-card">
                        <h4>Loading  please wait...  </h4> 
                        <BeatLoader />
                    </div>

                ) : filteredCities.length > 0 ? (
                    <InfiniteScroll
                        dataLength={filteredCities.length}
                        next={loadMoreCities}
                        hasMore={hasMore}
                    >
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th onClick={() => handleSort('name')}>
                                        City Name {getSortDirection('name')}
                                    </th>
                                    <th onClick={() => handleSort('cou_name_en')}>
                                        Country {getSortDirection('cou_name_en')}
                                    </th>
                                    <th onClick={() => handleSort('timezone')}>
                                        Timezone {getSortDirection('timezone')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCities.map((city, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td> {/* Serial number based on index */}
                                        <td>
                                            <Link to={`/weather/${city.fields.name}`}>{city.fields.name}</Link>
                                        </td>
                                        <td>{city.fields.cou_name_en}</td>
                                        <td>{city.fields.timezone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </InfiniteScroll>
                ) : (
                    searchPerformed && (
                        <div className="text-center cities-not-found-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="Error" className="error-image" />
                            <h4>No matching cities or countries found.</h4>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default CitiesTable;
