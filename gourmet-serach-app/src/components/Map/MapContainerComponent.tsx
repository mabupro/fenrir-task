import React from 'react';
import { MapContainer, TileLayer, ZoomControl, Marker, Popup, useMap } from 'react-leaflet';
import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapContainerComponentProps = {
    position: {
        lat: number;
        lng: number;
    };
    restaurants: any[]; // TODO:後で型定義
}

const SetView: React.FC<MapContainerComponentProps> = ({ position }) => {
    const map = useMap();

    React.useEffect(() => {
        map.setView(new LatLng(position.lat, position.lng), 16);
    }, [position]);

    return null;
};

export const MapContainerComponent: React.FC<MapContainerComponentProps> = ({ position, restaurants }) => {
    const mapCenter = new LatLng(position.lat, position.lng);

    return (
        <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ height: '100vh', width: '100%' }}
            zoomControl={false}
            scrollWheelZoom={true}
        >
            <SetView position={position} restaurants={[]} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <ZoomControl position="bottomright" />
            {restaurants.map(restaurant => (
                <Marker
                    key={restaurant.id}
                    position={[restaurant.lat, restaurant.lng]}
                >
                    <Popup>
                        <div>
                            <h3>{restaurant.name}</h3>
                            {/* その他の詳細情報を表示 */}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};
