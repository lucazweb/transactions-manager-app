import * as types from '../actions/ActionTypes';

const INITIAL_STATE = {
    transactions: [],
    error: null,
    loading: false,
};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case types.GET_TRANSACTIONS_REQUEST:
            return {...state, loading: true}

        case types.GET_TRANSACTIONS_SUCCESS:
            console.log('GET_TRANSACTIONS_SUCESSS');
            console.log(action.payload);
            return {...state, transactions: [...action.payload], loading: false}

        case types.GET_TRANSACTIONS_FAILURE:
            return {...state, error: action.payload, loading: false}

        case types.ADD_TRANSACTION_REQUEST:
            return {...state, loading: true}

        case types.ADD_TRANSACTION_SUCCESS:
            return {...state, loading: false, transactions:[...state.transactions, action.payload ] }

        case types.ADD_TRANSACTION_FAILURE:
            return {...state, error: action.payload}

        default:
            return state;
    }
}
