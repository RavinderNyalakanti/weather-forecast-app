// components/SmallMap.js

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../App.css'; // Ensure you have appropriate styles here

const SmallMap = ({ lat, lon, cityName }) => {
    const [isLarge, setIsLarge] = useState(false);

    const handleClick = () => {
        setIsLarge(!isLarge);
    };

    return (
        <div
            className={`map-container ${isLarge ? 'map-large' : 'map-small'}`}
            onClick={handleClick}
        >
            <MapContainer center={[lat, lon]} zoom={10} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[lat, lon]} icon={L.icon({ iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png' })}>
                    <Popup>{cityName}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default SmallMap;
