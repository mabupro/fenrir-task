import React, { useState } from 'react';
import { Header } from './components/Header';
import { MapContainerComponent } from './components/Map/MapContainerComponent';
import { LocateButton } from './components/Map/LocateButton';
import { RangeSelectButton } from './components/RangeSelectButton';
import { searchRestaurantsByLocation } from './components/Restaurant/RestaurantAPI';

function App() {
  const [position, setPosition] = useState({ lat: 35.681236, lng: 139.767125 });
  const [range, setRange] = useState(500); // 初期範囲を500mに設定

  const handleLocationUpdate = (newPosition: { lat: number; lng: number; }) => {
    setPosition(newPosition);
  };

  // 範囲が選択されたときの処理
  const handleRangeSelect = (selectedRange: number) => {
    setRange(selectedRange);
    searchRestaurantsByLocation(position.lat, position.lng, selectedRange)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching restaurants:", error);
      });
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 mt-4 mx-auto md:m-5 w-full z-20">
        <Header />
        <RangeSelectButton onSelectRange={handleRangeSelect} />
      </div>
      <div className="absolute top-0 w-full h-full z-0">
        <MapContainerComponent position={position} />
      </div>
      <div className='absolute bottom-28 right-10 z-20'>
        <LocateButton onLocate={handleLocationUpdate} />
      </div>
    </div>
  );
}

export default App;
