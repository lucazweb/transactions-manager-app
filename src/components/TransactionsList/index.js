import React, { Fragment } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Placeholder from '../Placeholder';
import * as transactionActions from '../../store/actions/transactions';
import './style.scss';

moment.locale('pt-br');

const handleTransactionsDate = timestamp => {
  let time = new firebase.firestore.Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
  return moment(time).format('DD/MM, hh:mm');
}

const TransactionsList = ({transactions, loading}) => (
    
    <div className="transactions-list">
        {
            (!loading && transactions.length > 0) && (
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
                                    {/* <div className="remove-btn"> <FontAwesomeIcon icon={faTimes} /> </div> */}
                                </li>
                            ))
                        }
                        </ul>
                    </div>    

                    {/* <div className="confirm-transaction-deletion-overlay">
                        <div className="confirm-transaction-deletion-dialog">
                          <div className="dialog-header">
                            <h2>Are you sure?</h2>
                          </div>
                          <div className="dialog-body"> </div>
                        </div>
                    </div> */}

                </Fragment>
            )
        }
        {
          transactions.length === 0 && (
            <Placeholder />
          )
        }
    </div> 
);

const mapStateToProps = function({transactions}){  
    return {
        transactions: transactions.transactions,
        loading: transactions.loading,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
