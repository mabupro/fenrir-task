import React, { useState } from 'react';
import { List, ListItem } from "@material-tailwind/react";
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // react-router-domのLinkをインポート

interface RestaurantListProps {
    restaurants: any[]; // TODO:型宣言
}

export const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
    const navigate = useNavigate();
    const [isListOpen, setIsListOpen] = useState(false);

    const toggleList = () => {
        setIsListOpen(!isListOpen);
    };

    const handleRestaurantClick = (id: string) => {
        navigate(`/restaurants/${id}`)
    }

    return (
        <div className={`fixed bottom-0 w-full md:left-0 md:w-1/2 bg-white p-4 shadow-lg overflow-hidden rounded-lg ${isListOpen ? 'h-4/5' : 'h-16'}`}>
            <div className="w-full flex justify-center items-center">
                <button
                    className="w-1/3 bg-orange-500 text-white p-2 rounded-full flex justify-center items-center"
                    onClick={toggleList}
                >
                    {isListOpen ? <FaAngleDown /> : <FaAngleUp />}
                </button>
            </div>
            {isListOpen && (
                <div className="overflow-auto h-full">
                    <List className='my-5'>
                        {restaurants.map(restaurant => (
                            <ListItem
                                key={restaurant.id}
                                onClick={() => handleRestaurantClick(restaurant.id)}
                                className="flex items-center max-h-42"
                            >
                                {restaurant.photo.pc.l && <img src={restaurant.photo.pc.l} alt={restaurant.name} style={{ width: '30%', margin: '10px' }} />}
                                <div>
                                    <p className="font-bold">{restaurant.name}</p>
                                    <p className="text-sm">{restaurant.address}</p>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </div>
            )}
        </div>
    );
};
