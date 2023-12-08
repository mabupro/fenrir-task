import React, { useState } from 'react';
import { Navbar, Button, Input } from "@material-tailwind/react";
import Logo from '../assets/RestaurantNavi.svg';

export const Header = () => {

    const [searchInput, setSearchInput] = useState<string | null>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const handleSearch = () => {
        // TODO:検索ロジック記述
        console.log("検索内容：", searchInput);
    }

    return (
        <Navbar
            variant="gradient"
            color="orange"
            className="max-w-screen-sm md:min-w-[480px] from-gray-100 to-gray-200 p-2 opacity-95"
        >
            <div className="flex w-full justify-start md:justify-center">
                <img
                    className="h-10 w-10 rounded-full object-cover object-center"
                    src={Logo}
                    alt="nature image"
                />
                <div className="relative w-full">
                    <Input
                        type="search"
                        color="orange"
                        label="レストランを検索する..."
                        className="w-full"
                        containerProps={{
                            className: "w-full",
                        }} crossOrigin={undefined}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Button
                        size="sm"
                        color="deep-orange"
                        className="!absolute right-1 top-1 rounded"
                        onClick={handleSearch}
                    >
                        検索
                    </Button>
                </div>
            </div>
        </Navbar>
    );
};
