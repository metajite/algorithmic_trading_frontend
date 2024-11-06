import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCurrentPrice = async (market) => {
    const response = await axios.get(`http://localhost:5000/current-price?market=${market}`);
    return response.data.current_price;
};

const PriceTrend = ({ market }) => {
    const { data, isLoading, isError } = useQuery(['currentPrice', market], () => fetchCurrentPrice(market));

    if (isLoading) return <div>Loading current price...</div>;
    if (isError) return <div>Error fetching current price</div>;

    return (
        <div>
            <h3>Current Price for {market}: ${data}</h3>
        </div>
    );
};

export default PriceTrend;
