import React from 'react';
import { IconButton } from '@material-tailwind/react';
import { FaLocationArrow } from 'react-icons/fa';

export const LocateButton = () => {
    return (
        <IconButton size="lg" className="rounded-full bg-deep-orange-400 scale-150 shadow-lg">
            <FaLocationArrow className="text-white" />
        </IconButton>
    );
}
