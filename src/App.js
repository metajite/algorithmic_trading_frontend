import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import Dropdown from './components/Dropdown';
import BacktestResults from './components/BacktestResults';

const queryClient = new QueryClient();

function App() {
    const [market, setMarket] = useState('SP500');

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>Stock Backtesting Tool</h1>
                <Dropdown onMarketChange={setMarket} />
                <BacktestResults market={market} />
            </div>
        </QueryClientProvider>
    );
}

export default App;
