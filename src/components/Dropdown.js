import React from 'react';

const Dropdown = ({ onMarketChange }) => {
    const markets = ['SP500', 'NASDAQ', 'DOWJONES'];

    return (
        <select onChange={(e) => onMarketChange(e.target.value)}>
            {markets.map((market) => (
                <option key={market} value={market}>{market}</option>
            ))}
        </select>
    );
};

export default Dropdown;
