import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const MapContainerComponent = () => {
    const position = new LatLng(35.681236, 139.767125); // 東京駅の座標

    return (
        <>
            <MapContainer
                center={position}
                zoom={13}
                style={{ height: '100vh', width: '100%' }}
                zoomControl={false}
                scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <ZoomControl position="bottomright" />
            </MapContainer>
        </>

    );
};
