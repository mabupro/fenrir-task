import React from 'react';
import { Restaurant } from './RestaurantAPI';
import { Card, CardBody, Typography, Spinner, Chip, Button } from '@material-tailwind/react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface RestaurantDetailProps {
    restaurant: Restaurant | null;
    restaurants: Restaurant[];
    selectedIndex: number;
    onSelect: (index: number) => void;
}

export const RestaurantDetail: React.FC<RestaurantDetailProps & { onClose: () => void }> = ({ restaurant, restaurants, selectedIndex, onSelect, onClose }) => {
    if (!restaurant) {
        return <div className="flex justify-center items-center h-screen">
            <Spinner className="h-10 w-10" />
        </div>;
    }

    const handleNext = () => {
        const nextIndex = (selectedIndex + 1) % restaurants.length;
        onSelect(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (selectedIndex - 1 + restaurants.length) % restaurants.length;
        onSelect(prevIndex);
    };

    const genreValue = restaurant.genre ? restaurant.genre.name : 'ジャンル不明';
    const budgetValue = restaurant.budget ? restaurant.budget.name : '予算不明';

    return (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 overflow-auto">
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4 h-4/5">
                    <button onClick={onClose} className="text-blue-500">
                        <FaArrowLeft className="inline mr-2" />戻る
                    </button>
                    <div>
                        <Button
                            color="orange"
                            size="sm"
                            onClick={handlePrev}
                            className="mr-2"
                        >
                            <FaArrowLeft />
                        </Button>
                        <Button
                            color="orange"
                            size="sm"
                            onClick={handleNext}
                        >
                            <FaArrowRight />
                        </Button>
                    </div>
                </div>
                <Card>
                    <CardBody>
                        <img src={restaurant.photo.pc.l} alt={restaurant.name} className="w-full max-h-96 object-cover mb-4" />

                        <Typography variant="h5" color="gray">{restaurant.name}</Typography>
                        <Typography color="gray" className="mb-2">{restaurant.address}</Typography>

                        <div className="flex flex-wrap gap-2 my-2">
                            <Chip color="cyan" value={genreValue} variant="outlined" />
                            <Chip color="amber" value={budgetValue} variant="outlined" />
                        </div>

                        <Typography color="gray">{`営業時間: ${restaurant.open}`}</Typography>
                        <Typography color="gray">{`アクセス: ${restaurant.access}`}</Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};
