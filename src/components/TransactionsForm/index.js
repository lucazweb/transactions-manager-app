import React from 'react';
import firebase  from 'firebase';
import { SaveTransaction } from '../../service/FireService';
import { connect } from 'react-redux';
import { customHistory } from '../../Wrapper';
import { bindActionCreators } from 'redux';
import * as transactionActions from '../../store/actions/transactions';
import './style.scss';

let defaultCategory = 'Credit';

const handleAddTransactions = (event, addTransactionReq, addTransactionSuccess, addTransactionFailure) => {
    event.preventDefault();
    
    let form = event.target;
    
    let transaction = {
        description: form.description.value,
        value: Number(form.value.value),
        category: form.category.value
    }

    function descriptionValidation(description){
        let pattern = /[!@#$%^&*(),.?":{}|<>]/g;
        if(description && !pattern.test(description)){
            return true
        }
        return false;
    }

    function categoryValidation(category){
        if(category.includes('Credit') || category.includes('Debit') ){
            return true;
        }
        return false
    }

    if(descriptionValidation(transaction.description) && categoryValidation(transaction.category) && transaction.value){
        addTransactionReq();
        transaction.timestamp = firebase.firestore.Timestamp.fromDate(new Date());
        SaveTransaction(transaction)
            .then(res => {
                transaction.id = res.id;
                addTransactionSuccess({
                  id: res.id,
                  data: {
                    description: transaction.description,
                    value: transaction.value,
                    category: transaction.category,
                    timestamp: transaction.timestamp
                  }
                });
                ['description', 'value'].forEach(field => form[field].value = '');
                customHistory.push('/');
            }).catch(err => console.log('FirebaseError', err));

    } else {
        // validation error
        console.error('Validation Error');
    }
}

const handleCategoryValue = e => {
    e.target.value = e.target.value === 'Credit' ? 'Debit' : 'Credit';
}

const handleCancelRequest = () => {
    customHistory.push('/');
}

const TransactionsForm = ({ addTransactionReq, addTransactionSuccess, addTransactionFailure }) => (
    <div className="transactions-form">
        <h2>Register a new transaction</h2>
        <form onSubmit={ e => { handleAddTransactions(e, addTransactionReq, addTransactionSuccess, addTransactionFailure)}}>
            <div className="group">      
                <input autoComplete="off" name="description" type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Description</label>
            </div>                                                        
            <div className="group-row">
                <div className="group">      
                    <input autoComplete="off" name="value" type="number" min="1" step=".01" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Value</label>
                </div>                                  

                <div className="group group-toogle-type">  
                    <input id="category" readOnly="readonly" onClick={e => handleCategoryValue(e)} name="category" type="text" defaultValue={defaultCategory} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
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
    return {
        state,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsForm);
