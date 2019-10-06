import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as transactionActions from '../../store/actions/transactions';
import './style.scss';

const TransactionsList = ({transactions}) => (
    
    <div className="transactions-list">
        {
            transactions.length > 0 ? (
                <Fragment>
                    <h2>Transactions list</h2>
                    <div className="box">
                        <ul id="first-list">
                        {
                            transactions.map(transaction => (
                                <li key={transaction.id}>
                                    <span></span>
                                    <div className="title">{transaction.data.description}</div>
                                    <div className="price">R$ {transaction.data.value}</div>
                                    <div className="time">
                                        <span>04, Out</span>
                                    </div>
                                </li>
                            ))
                        }

                        </ul>
                    </div>                 
                </Fragment>
            ) : (<p> Sem transações realizadas, <Link to='/new-transaction'>Adicionar </Link> </p>)
        }
    </div> 
);

const mapStateToProps = function(state){
    console.log(state);
    return {
        transactions: state.transactions.transactions
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
