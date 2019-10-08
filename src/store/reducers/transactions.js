import * as types from '../actions/ActionTypes';

const INITIAL_STATE = {
    transactions: [],
    total:{
      credit: 0,
      debit: 0,
    },
    error: null,
    validationMessage: null,
    loading: false,
    selectedTransaction: null,
};

const handleAmount = (transactions, category) => {
  let filter = transactions.filter(transaction => transaction.data.category === category);
  return filter.reduce((sum, transaction) => sum + transaction.data.value, 0)
}

const handleSingleAdition = (state, transaction, category) => {
  let total = Object.assign({}, state.total);
  let key = category.toLowerCase();
  
  if(transaction.data.category === category){
    return total[key] + transaction.data.value
  }
  return total[key]
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case types.GET_TRANSACTIONS_REQUEST:
            return {
              ...state, 
              loading: true
            }

        case types.GET_TRANSACTIONS_SUCCESS:
            return {
              ...state, 
              transactions: [...action.payload],
              total: {
                credit: handleAmount(action.payload, 'Credit'),
                debit: handleAmount(action.payload, 'Debit'),
              },
              loading: false
            }

        case types.GET_TRANSACTIONS_FAILURE:
            return {
              ...state, 
              error: action.payload, 
              loading: false
            }

        case types.ADD_TRANSACTION_REQUEST:
            return {
              ...state, 
              loading: true
            }

        case types.ADD_TRANSACTION_SUCCESS:
            return {
              ...state, 
              loading: false, 
              total:{
                credit: handleSingleAdition(Object.assign({}, state), action.payload, 'Credit'),
                debit: handleSingleAdition(Object.assign({}, state), action.payload, 'Debit'),
              },
              transactions:[...state.transactions, action.payload],
              validationMessage: null,
              
            }

        case types.REMOVE_TRANSACTION_REQUEST:
            return{
              ...state,
              loading: true,
            }

        case types.REMOVE_TRANSACTION_SUCCESS:
            return {
              ...state,
              transactions: state.transactions.filter(t => t.id !== action.payload),
              loading: false,
              selectedTransaction: null,
            }

        case types.ADD_TRANSACTION_FAILURE:
            return {
              ...state, 
              error: action.payload
            }

        case types.SELECT_TRANSACTION:
            return {
              ...state,
              selectedTransaction: action.payload
            }

        case types.CLEAR_TRANSACTION:
            return {
              ...state,
              selectedTransaction: null
            }

        case types.VALIDATION_ERROR:
            return {
              ...state,
              validationMessage: action.payload
            }

        default:
            return state;
    }
}
