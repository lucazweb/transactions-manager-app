import React from 'react';
import './style.scss';

const TransactionsDisplay = () => (
    <div className="total-amount-display">
        <div className="transaction-display-item">
            <h2>Credit</h2>
            <span>R$ 23.39</span>
        </div>
        <div className="transaction-display-item">
            <h2>Debit</h2>
            <span>R$ 23.39</span>
        </div>
        <div className="transaction-display-item">
            <h2>Total amount</h2>
            <span>R$ 23.39</span>
        </div>
    </div>    
);

export default TransactionsDisplay;