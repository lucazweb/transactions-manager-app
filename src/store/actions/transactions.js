import * as types from './ActionTypes';

export const getTransactionsReq = () => ({
    type: types.GET_TRANSACTIONS_REQUEST
});

export const getTransactionsSuccess = transactions => ({
    type: types.GET_TRANSACTIONS_SUCCESS,
    payload: transactions
});

export const getTransactionsFailure = error => ({
    type: types.GET_TRANSACTIONS_FAILURE,
    payload: error
});

export const addTransactionReq = () => ({
    type: types.ADD_TRANSACTION_REQUEST
});

export const addTransactionSuccess = data => ({
    type: types.ADD_TRANSACTION_SUCCESS,
    payload: data
});

export const addTransactionFailure = error => ({
    type: types.ADD_TRANSACTION_FAILURE,
    payload: error
});

export const removeTransactionReq = () => ({
    type: types.REMOVE_TRANSACTION_REQUEST
});

export const removeTransactionSuccess = transaction => ({
    type: types.REMOVE_TRANSACTION_SUCCESS,
    payload: transaction
});

export const removeTransactionFailure = error => ({
    type: types.REMOVE_TRANSACTION_FAILURE,
    payload: error
});

export const selectTransaction = transaction => ({
    type: types.SELECT_TRANSACTION,
    payload: transaction
});

export const clearTransaction = () => ({
    type: types.CLEAR_TRANSACTION,
});

export const validationError = error => ({
  type: types.VALIDATION_ERROR,
  payload: error
});
