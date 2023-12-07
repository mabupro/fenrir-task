import React, { useState } from 'react';
import { Navbar, Button, Input } from "@material-tailwind/react";

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
            className="mt-4 mx-auto md:m-5 max-w-screen-sm md:min-w-[480px] from-gray-100 to-gray-200 p-2 opacity-80"
        >
            <div className="flex w-full justify-start md:justify-center">
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
                        className="absolute right-1 top-1 rounded"
                        onClick={handleSearch}
                    >
                        検索
                    </Button>
                </div>
            </div>
        </Navbar>
    );
};
