import React from 'react';
import { Button } from "@material-tailwind/react";

interface RangeSelectButtonProps {
    onSelectRange: (range: number) => void;
}

export const RangeSelectButton: React.FC<RangeSelectButtonProps> = ({ onSelectRange }) => {
    return (
        <div className="flex space-x-2 my-4">
            <Button
                color="orange"
                ripple={true}
                onClick={() => onSelectRange(300)}
            >
                300m
            </Button>
            <Button
                color="orange"
                ripple={true}
                onClick={() => onSelectRange(500)}
            >
                500m
            </Button>
            <Button
                color="orange"
                ripple={true}
                onClick={() => onSelectRange(1000)}
            >
                1km
            </Button>
        </div>
    );
};
