import React from 'react';
import { IconButton } from '@material-tailwind/react';
import { FaLocationArrow } from 'react-icons/fa';

interface LocateButtonProps {
    onLocate: (coords: { lat: number; lng: number }) => void;
}

export const LocateButton: React.FC<LocateButtonProps> = ({ onLocate }) => {

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    onLocate({ lat: latitude, lng: longitude });
                    console.log(latitude, longitude);
                },
                (error) => {
                    console.error("Geolocation Error:", error);
                }
            );
        }
    }

    return (
        <IconButton
            size="lg"
            className="rounded-full bg-deep-orange-400 scale-150 shadow-lg"
            onClick={getLocation}
        >
            <FaLocationArrow className="text-white" />
        </IconButton>
    );
}
