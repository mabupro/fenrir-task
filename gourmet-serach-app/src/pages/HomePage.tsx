import React, { useState } from 'react';
import { MapContainerComponent } from '../components/Map/MapContainerComponent';
import { LocateButton } from '../components/Map/LocateButton';
import { RangeSelectButton } from '../components/RangeSelectButton';
import { searchRestaurantsByLocation } from '../components/Restaurant/RestaurantAPI';
import { RestaurantList } from '../components/Restaurant/RestaurantList';
import { Header } from '../components/Header';

export const HomePage = () => {
    const [position, setPosition] = useState({ lat: 35.681236, lng: 139.767125 });
    const [range, setRange] = useState(500);
    const [restaurants, setRestaurants] = useState([]);

    const handleLocationUpdate = (newPosition: { lat: number; lng: number; }) => {
        setPosition(newPosition);
    };

    const handleRangeSelect = (selectedRange: number) => {
        setRange(selectedRange);
        searchRestaurantsByLocation(position.lat, position.lng, selectedRange)
            .then(data => setRestaurants(data))
            .catch(error => console.error("Error fetching restaurants:", error));
    };

    return (
        <div className="relative h-screen">
            <div className="absolute top-0 mt-4 mx-auto md:m-5 w-full z-20">
                <Header />
                <RangeSelectButton onSelectRange={handleRangeSelect} />
            </div>
            <div className="absolute w-full z-20">
                <RestaurantList restaurants={restaurants} />
            </div>
            <div className="absolute top-0 w-full h-full z-0">
                <MapContainerComponent position={position} restaurants={restaurants} />
            </div>
            <div className='absolute bottom-28 right-10 z-10'>
                <LocateButton onLocate={handleLocationUpdate} />
            </div>
        </div>
    );
};
