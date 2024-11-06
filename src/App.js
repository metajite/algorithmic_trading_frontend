import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dropdown from './components/Dropdown';
import BacktestResults from './components/BacktestResults';
import PriceTrend from './components/PriceTrend';

const queryClient = new QueryClient();

function App() {
    const [market, setMarket] = useState('SP500');

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>Market Backtesting Tool</h1>
                <Dropdown onMarketChange={setMarket} />
                <PriceTrend market={market} />
                <BacktestResults market={market} />
            </div>
        </QueryClientProvider>
    );
}

export default App;
