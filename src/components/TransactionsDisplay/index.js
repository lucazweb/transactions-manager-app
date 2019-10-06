import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as transactionActions from '../../store/actions/transactions';
import './style.scss';

const TransactionsDisplay = ({transactions}) => (
    <div className="total-amount-display">
        <div className="transaction-display-item">
            <h2>Credit</h2>
            <span> R$ 
            {
              transactions.filter(transaction => transaction.data.category === 'Credit')
              .reduce((sum, transaction) => sum + transaction.data.value, 0)
            }
            </span>
        </div>
        <div className="transaction-display-item">
            <h2>Debit</h2>
            <span> R$
            {
              transactions.filter(transaction => transaction.data.category === 'Debit')
              .reduce((sum, transaction) => sum + transaction.data.value, 0)
            }
            </span>
        </div>
        <div className="transaction-display-item">
            <h2>Total amount</h2>
            <span>R$ {transactions.reduce((sum, transaction) => sum + transaction.data.value, 0)}</span>
        </div>
    </div>    
);

const mapStateToProps = state => ({
  transactions: state.transactions.transactions
});

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsDisplay);
