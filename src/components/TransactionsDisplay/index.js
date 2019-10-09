import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as formatCurrency from 'format-currency-to-br';
import * as transactionActions from '../../store/actions/transactions';
import './style.scss';

const TransactionsDisplay = ({transactions, total, loading}) => (
  <div className="total-amount-display">
    <div className="transaction-display-item">
        <h2>Crédito <div className="bullet credit"></div></h2>
        <span>{formatCurrency(total.credit)} </span>            
    </div>
    <div className="transaction-display-item">
        <h2>Débito <div className="bullet debit"></div></h2>
        <span> {formatCurrency(total.debit)}</span>
    </div>
    <div className="transaction-display-item">
        <h2>Total</h2>
        <span>{formatCurrency(transactions.reduce((sum, transaction) => sum + transaction.data.value, 0))}</span>
    </div>       
  </div>          
);

TransactionsDisplay.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.shape({
    credit: PropTypes.number,
    debit: PropTypes.number
  }),
  loading: PropTypes.bool
}

const mapStateToProps = function({transactions}){
  return {
    transactions: transactions.transactions,
    total: transactions.total,
    loading: transactions.loading    
  } 
};

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsDisplay);
