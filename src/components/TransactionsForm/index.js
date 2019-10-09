import React from 'react';
import PropTypes from 'prop-types';
import firebase  from 'firebase';
import { descriptionValidation, categoryValidation, valueValidation } from './ValidationHelper';
import { SaveTransaction } from '../../service/FireService';
import { connect } from 'react-redux';
import { customHistory } from '../../Wrapper';
import { bindActionCreators } from 'redux';
import * as transactionActions from '../../store/actions/transactions';
import './style.scss';

let defaultCategory = 'Crédito';

const handleAddTransactions = (event, addTransactionReq, addTransactionSuccess, addTransactionFailure, validationError) => {
    event.preventDefault();
    
    let form = event.target;
    
    let transaction = {
        description: form.description.value,
        value: Number(form.value.value),
        category: form.category.value === 'Crédito' ? 'Credit' : 'Debit'
    }

    try{
        if(descriptionValidation(transaction.description) && categoryValidation(transaction.category) && valueValidation(transaction.value)){
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
      }
    } catch(e){
      validationError(e.message);
    }
}

const handleCategoryValue = e => {
    e.target.value = e.target.value === 'Crédito' ? 'Débito' : 'Crédito';
}

const handleCancelRequest = () => {
    customHistory.push('/');
}

const TransactionsForm = ({ addTransactionReq, addTransactionSuccess, addTransactionFailure, validationMessage, validationError }) => (
    <div className="transactions-form">
        <h2>Cadastre uma transação</h2>

        <form onSubmit={ e => { handleAddTransactions(e, addTransactionReq, addTransactionSuccess, addTransactionFailure, validationError)}}>
            <div className="group">      
                <input data-test="description" className={validationMessage ? 'invalid' : ''} autoComplete="off" name="description" type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Descrição</label>
            </div>                                                        
            <div className="group-row">
                <div className="group">      
                    <input data-test="value" className={validationMessage ? 'invalid' : ''} autoComplete="off" name="value" type="number" min="0.5" step=".01" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Valor</label>
                </div>                                  

                <div className="group group-toogle-type">  
                    <input data-test="category" id="category" readOnly="readonly" onClick={e => handleCategoryValue(e)} name="category" type="text" defaultValue={defaultCategory} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>                            
            </div>
            {
              validationMessage && (<span className="error-message"> {validationMessage} </span>)
            }            
            <div className="group group-btns">
                <button data-test="savebtn" type="submit" className="btn btn-save-transactions">Salvar transação</button>
                <button onClick={() => handleCancelRequest()} className="btn btn-cancel-transactions">Cancelar</button>
            </div>
        </form>
    </div>    
);

TransactionsForm.propTypes = {
  addTransactionsReq: PropTypes.func,
  addTransactionsSuccess: PropTypes.func,
  addTransactionFailure: PropTypes.func,
  validationMessage: PropTypes.string,
  validationError: PropTypes.func
}

const mapStateToProps = ({transactions}) => ({
  validationMessage: transactions.validationMessage
})

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsForm);
