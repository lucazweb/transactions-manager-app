import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as transactionActions from '../../store/actions/transactions';

import './style.scss';

const handleAddTransactions = (event, addTransactionReq, addTransactionSuccess) => {
    event.preventDefault();
    addTransactionReq();
    addTransactionSuccess({
        description: event.target.description.value,
        value: event.target.value.value
    });
   
    ['description', 'value'].forEach(field => event.target[field].value = '');
}

const handleCancelRequest = () => {
    console.info('REDIRECT TO HOME VIEW');
}


const TransactionsForm = ({ addTransactionReq, addTransactionSuccess }) => (
    <div className="transactions-form">
        <h2>Register a new transaction</h2>
        <form onSubmit={ e => { handleAddTransactions(e, addTransactionReq, addTransactionSuccess)}}>
            <div className="group">      
                <input autoComplete="off" name="description" type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Description</label>
            </div>                                                        
            <div className="group-row">
                <div className="group">      
                    <input autoComplete="off" name="value" type="number" min="1" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Value</label>
                </div>                                  

                <div className="group">      
                    <input name="category" type="text" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Category</label>
                </div>                            
            </div>
            <div className="group group-btns">
                <button type="submit" className="btn btn-save-transactions">Save Transaction</button>
                <button onClick={() => handleCancelRequest()} className="btn btn-cancel-transactions">Cancel Transaction</button>
            </div>
        </form>
    </div>    
);

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsForm);