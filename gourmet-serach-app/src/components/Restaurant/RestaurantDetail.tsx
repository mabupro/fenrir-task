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

export const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, restaurants, selectedIndex, onSelect }) => {
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
        <div className="restaurant-detail my-10">
            <Card>
                <CardBody>
                    <img src={restaurant.photo.pc.l} alt={restaurant.name} className="w-full mb-4" />

                    <Typography variant="h5" color="gray">{restaurant.name}</Typography>
                    <Typography color="gray" className="mb-2">{restaurant.address}</Typography>

                    <div className="flex flex-wrap gap-2 my-2">
                        <Chip color="cyan" value={genreValue} variant="outlined" />
                        <Chip color="amber" value={budgetValue} variant="outlined" />
                    </div>

                    <Typography color="gray">{`営業時間: ${restaurant.open}`}</Typography>
                    <Typography color="gray">{`アクセス: ${restaurant.access}`}</Typography>
                </CardBody>
                <div className="flex justify-between m-4">
                    <Button
                        color="blue"
                        size="sm"
                        onClick={handlePrev}
                        className="flex items-center"
                    >
                        <FaArrowLeft />
                    </Button>
                    <Button
                        color="blue"
                        size="sm"
                        onClick={handleNext}
                        className="flex items-center"
                    >
                        <FaArrowRight />
                    </Button>
                </div>
            </Card>
        </div>
    );
};
