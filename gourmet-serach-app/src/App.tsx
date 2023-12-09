import React, { useState } from 'react';
import { Header } from './components/Header';
import { MapContainerComponent } from './components/Map/MapContainerComponent';
import { LocateButton } from './components/Map/LocateButton';

function App() {
  const [position, setPosition] = useState({ lat: 35.681236, lng: 139.767125 });

  const handleLocationUpdate = (newPosition: React.SetStateAction<{ lat: number; lng: number; }>) => {
    setPosition(newPosition);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute mt-4 mx-auto md:m-5 w-full z-20">
        <Header />
      </div>
      <div className="absolute top-0 w-full h-full z-0">
        <MapContainerComponent position={position} />
      </div>
      <div className='absolute my-12 bottom-28 right-10 z-20'>
        <LocateButton onLocate={handleLocationUpdate} />
      </div>
    </div>
  );
}

export default App;
