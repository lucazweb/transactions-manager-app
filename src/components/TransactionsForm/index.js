import React from 'react';
import { connect } from 'react-redux';
import { customHistory } from '../../Wrapper';
import { bindActionCreators } from 'redux';
import * as transactionActions from '../../store/actions/transactions';

import './style.scss';

let defaultCategory = 'Credit';

const handleAddTransactions = (event, addTransactionReq, addTransactionSuccess) => {
    event.preventDefault();
    
    addTransactionReq();
    addTransactionSuccess({
        description: event.target.description.value,
        value: event.target.value.value,
        category: event.target.category.value
    });
   
    ['description', 'value'].forEach(field => event.target[field].value = '');
}

const handleCategoryValue = e => {
    e.target.value = e.target.value === 'Credit' ? 'Debit' : 'Credit';
}

const handleCancelRequest = () => {
    customHistory.push('/');
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

                <div className="group group-toogle-type">  
                    
                    <input id="category" readOnly="readonly" onClick={e => handleCategoryValue(e)} name="category" type="text" defaultValue={defaultCategory} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    {/* <label>Category</label> */}
                </div>                            
            </div>
            <div className="group group-btns">
                <button type="submit" className="btn btn-save-transactions">Save Transaction</button>
                <button onClick={() => handleCancelRequest()} className="btn btn-cancel-transactions">Cancel Transaction</button>
            </div>
        </form>
    </div>    
);

const mapStateToProps = function(state){
    console.log(state);
    return {
        state,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsForm);