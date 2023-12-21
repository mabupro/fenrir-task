import React, { useState, useEffect } from 'react';
import { List, ListItem, Badge } from "@material-tailwind/react";
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { RestaurantDetail } from './RestaurantDetail';
import { Restaurant } from './RestaurantAPI';

type RestaurantListProps =  {
    restaurants: Restaurant[];
}

export const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
    const [isListOpen, setIsListOpen] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    const toggleList = () => {
        setIsListOpen(!isListOpen);
    };

    const handleRestaurantClick = (index: number) => {
        setSelectedRestaurant(restaurants[index]);
        setSelectedIndex(index);
    }

    const handleCloseDetail = () => {
        setSelectedRestaurant(null);
        setSelectedIndex(-1);
    };

    useEffect(() => {
        if (selectedIndex >= 0 && selectedIndex < restaurants.length) {
            setSelectedRestaurant(restaurants[selectedIndex]);
        }
    }, [selectedIndex, restaurants]);

    return (
        <div className={`fixed bottom-0 w-full md:left-0 md:w-1/2 bg-white p-4 shadow-lg overflow-hidden rounded-lg ${isListOpen ? 'h-4/5' : 'h-16'}`}>
            <div className="w-full flex justify-center items-center">
                <button
                    className="w-1/3 bg-orange-500 text-white p-2 rounded-full flex justify-center items-center"
                    onClick={toggleList}
                >
                    {isListOpen ? <FaAngleDown /> : <FaAngleUp />}
                    {restaurants.length > 0 && (
                        <Badge color="red" className="ml-2">
                            {restaurants.length}
                        </Badge>
                    )}
                </button>
            </div>
            {isListOpen && (
                <div className="overflow-auto h-full">
                    <List className='my-5'>
                        {restaurants.map((restaurant, index) => (
                            <ListItem
                                key={restaurant.id}
                                onClick={() => handleRestaurantClick(index)}
                                className="flex items-center max-h-42"
                            >
                                {restaurant.photo.pc.l && <img src={restaurant.photo.pc.l} alt={restaurant.name} style={{ width: '30%', margin: '10px' }} />}
                                <div>
                                    <p className="font-bold">{restaurant.name}</p>
                                    <p className="text-sm">{restaurant.access}</p>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                    {selectedRestaurant && (
                        <div className="absolute top-0 left-0 w-full h-full bg-white p-4">
                            <RestaurantDetail
                                restaurant={selectedRestaurant}
                                restaurants={restaurants}
                                selectedIndex={selectedIndex}
                                onSelect={setSelectedIndex}
                                onClose={handleCloseDetail}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
