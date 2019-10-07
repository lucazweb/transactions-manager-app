import React, { Fragment } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as transactionActions from '../../store/actions/transactions';
import './style.scss';

moment.locale('pt-br');

const handleTransactionsDate = timestamp => {
  let time = new firebase.firestore.Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
  return moment(time).format('DD/MM, hh:mm');
}

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
                                        <span>{handleTransactionsDate(transaction.data.timestamp)}</span> 
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
