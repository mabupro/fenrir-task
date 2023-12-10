const API_KEY = import.meta.env.VITE_HOTPEPPER_API_KEY;

export interface Restaurant {
    id: string;
    name: string;
    address: string;
    photo: {
        pc: {
            l: string;
        };
    };
    imageUrl: string;
    open: string;
    access: string;
    budget: {
        name: string;
    };
    genre: {
        name: string;
    };
    // その他の必要なプロパティ
}

// 現在地に基づくレストラン検索
export const searchRestaurantsByLocation = async (latitude: number, longitude: number, range: number): Promise<Restaurant[]> => {
    const url = `/api/hotpepper/gourmet/v1/?key=${API_KEY}&lat=${latitude}&lng=${longitude}&range=${range}&count=30&format=json`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results.shop as Restaurant[];
    } catch (error) {
        console.error('Location:Error fetching restaurant data:', error);
        return [];
    }
};

// キーワードに基づくレストラン検索
export const searchRestaurantsByKeyword = async (keyword: string): Promise<Restaurant[]> => {
    const url = `/api/hotpepper/gourmet/v1/?key=${API_KEY}&keyword=${encodeURIComponent(keyword)}&count=20&format=json`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results.shop as Restaurant[];
    } catch (error) {
        console.error('Keyword:Error fetching restaurant data:', error);
        return [];
    }
};

// 特定のレストランの詳細情報を取得
export const getRestaurantDetails = async (id: string): Promise<Restaurant | null> => {
    const url = `/api/hotpepper/gourmet/v1/?key=${API_KEY}&id=${id}&format=json`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results.shop[0] as Restaurant;
    } catch (error) {
        console.error('Error fetching restaurant details:', error);
        return null;
    }
};
