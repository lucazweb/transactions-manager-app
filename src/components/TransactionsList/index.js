import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { TimestampToDate } from '../../service/FireService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as formatCurrency from 'format-currency-to-br';
import moment from 'moment';
import Placeholder from '../Placeholder';
import Loading from '../Loading';
import ConfirmDeletionDialog from '../ConfirmDeletionDialog';
import * as transactionActions from '../../store/actions/transactions';
import './style.scss';

const handleTransactionsDate = timestamp => {
  let time = TimestampToDate(timestamp);
  return moment(time).format('DD/MM, hh:mm');
}

const TransactionsList = ({transactions, loading, selectTransaction}) => (
    <div className="transactions-list">
        {
            (!loading && transactions.length > 0) && (
                <Fragment>
                    <h2>Lista de transações  <Link to='/new-transaction' className="add-transactions-btn"><FontAwesomeIcon icon={faPlusCircle} /> <small>Adicionar transação</small></Link> </h2>
                    <div className="box">
                        <ul id="first-list">
                        {
                            transactions.map(transaction => (
                                <li onClick={() => selectTransaction(transaction)} key={transaction.id}>
                                    <span></span>
                                    <div className="title">
                                      {transaction.data.description}
                                      <div onClick={() => selectTransaction(transaction)} className="remove-btn"> <FontAwesomeIcon icon={faTimes} /> </div>
                                    </div>
                                    <div className="price"> {formatCurrency(transaction.data.value)}</div>
                                    <div className="time">
                                        <span>
                                          {handleTransactionsDate(transaction.data.timestamp)}
                                          <div className={transaction.data.category === 'Credit' ? 'credit' : 'debit'}>
                                            {transaction.data.category === 'Credit' ? 'Crédito' : 'Débito'}
                                          </div> 
                                        </span> 
                                    </div>
                                    
                                </li>
                            ))
                        }
                        </ul>
                    </div>    
                    <ConfirmDeletionDialog />
                </Fragment>
            )
        }

        {
          loading && (<Loading />)
        }

        {
          (transactions.length === 0) && !loading && (
            <Placeholder />
          )
        }
    </div> 
);

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  selectTransaction: PropTypes.func
}

const mapStateToProps = function({transactions}){  
    return {
        transactions: transactions.transactions,
        loading: transactions.loading,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
