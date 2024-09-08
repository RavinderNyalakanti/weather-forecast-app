// components/MapComponent.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = ({ lat, lon, cityName }) => {
    return (
        <MapContainer center={[lat, lon]} zoom={10} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[lat, lon]} icon={L.icon({ iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png' })}>
                <Popup>{cityName}</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
