import * as types from '../actions/ActionTypes';

const INITIAL_STATE = {
    transactions: []
};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case types.GET_TRANSACTIONS_REQUEST:
            return state;

        default:
            return state;
    }
}