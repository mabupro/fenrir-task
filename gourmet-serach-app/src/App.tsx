import React from 'react'
import { Header } from './components/Header';
import { MapContainerComponent } from './components/Map/MapContainerComponent';

function App() {
  return (
    <div className="relative h-screen">
      <div className="absolute mt-4 mx-auto md:m-5 w-full">
        <Header />
      </div>
      <div className="absolute top-0 w-full h-full -z-10">
        <MapContainerComponent />
      </div>
    </div>
  );
}


export default App
