const API_KEY = import.meta.env.VITE_HOTPEPPER_API_KEY;

// 現在地に基づくレストラン検索
export const searchRestaurantsByLocation = async (latitude: number, longitude: number, range: number) => {
    const url = `/api/hotpepper/gourmet/v1/?key=${API_KEY}&lat=${latitude}&lng=${longitude}&range=${range}&count=30&format=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results.shop;
    } catch (error) {
        console.error('Location:Error fetching restaurant data:', error);
    }
};

// キーワードに基づくレストラン検索
export const searchRestaurantsByKeyword = async (keyword: string) => {
    const url = `/api/hotpepper/gourmet/v1/?key=${API_KEY}&keyword=${encodeURIComponent(keyword)}&count=20&format=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results.shop;
    } catch (error) {
        console.error('Keyword:Error fetching restaurant data:', error);
    }
};
