import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRestaurantDetails } from './RestaurantAPI';
import { Card, CardBody, Typography, Spinner, Chip, CardHeader, Button } from '@material-tailwind/react';
import { FaArrowLeft } from 'react-icons/fa';

interface Restaurant {
    id: string;
    name: string;
    address: string;
    imageUrl: string;
    openHours: string;
    access: string;
    budget: string;
    genre: string;
    // その他の必要なプロパティ
}

export const RestaurantDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

    useEffect(() => {
        if (id) {
            getRestaurantDetails(id)
                .then((data: any) => {
                    const mappedData: Restaurant = {
                        id: data.id,
                        name: data.name,
                        address: data.address,
                        imageUrl: data.photo.pc.l,
                        openHours: data.open,
                        access: data.access,
                        budget: data.budget.name,
                        genre: data.genre.name
                    };
                    setRestaurant(mappedData);
                })
                .catch((error: any) => {
                    console.error("Error fetching restaurant details:", error);
                });
        }
    }, [id]);

    if (!restaurant) {
        return <div className="flex justify-center items-center h-screen">
            <Spinner className="h-10 w-10" />
        </div>;
    }

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="restaurant-detail my-10">
            <Card>
                <CardHeader color="orange" className="relative flex items-center justify-between">
                    <Button color="white" size="sm" className='m-1' onClick={handleBack}>
                        <FaArrowLeft  /> 
                    </Button>
                </CardHeader>
                <CardBody>
                    <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full mb-4" />

                    <Typography variant="h5" color="gray">{restaurant.name}</Typography>
                    <Typography color="gray" className="mb-2">{restaurant.address}</Typography>

                    <div className="flex flex-wrap gap-2 my-2">
                        <Chip color="cyan" value={restaurant.genre} variant="outlined" />
                        <Chip color="amber" value={restaurant.budget} variant="outlined" />
                    </div>

                    <Typography color="gray">{`営業時間: ${restaurant.openHours}`}</Typography>
                    <Typography color="gray">{`アクセス: ${restaurant.access}`}</Typography>
                </CardBody>
            </Card>
        </div>
    );
};
