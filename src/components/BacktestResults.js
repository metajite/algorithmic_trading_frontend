import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBacktestResults = async (market) => {
    const response = await axios.get(`http://localhost:5000/backtest?market=${market}`);
    return response.data;
};

const BacktestResults = ({ market }) => {
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['backtestResults', market],
        queryFn: () => fetchBacktestResults(market),
        keepPreviousData: true, // Keeps previous data while loading new data for smoother UX
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h3>Backtest Results for {market}</h3>
            <p>Total Trades: {data.total_trades}</p>
            <p>Cumulative Return: {data.cumulative_return.toFixed(2)}</p>
            {/* Optionally add more detailed results or charts */}
        </div>
    );
};

export default BacktestResults;
