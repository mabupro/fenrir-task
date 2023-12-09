import React from 'react';
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet';
import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface PositionProps {
    position: {
        lat: number;
        lng: number;
    };
}

const SetView: React.FC<PositionProps> = ({ position }) => {
    const map = useMap();

    React.useEffect(() => {
        map.setView(new LatLng(position.lat, position.lng), 13);
    }, [position]);

    return null;
};

export const MapContainerComponent: React.FC<PositionProps> = ({ position }) => {
    const mapCenter = new LatLng(position.lat, position.lng);

    return (
        <>
            <MapContainer
                center={mapCenter}
                zoom={13}
                style={{ height: '100vh', width: '100%' }}
                zoomControl={false}
                scrollWheelZoom={true}
            >
                <SetView position={position} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <ZoomControl position="bottomright" />
            </MapContainer>
        </>
    );
};
