import Fire from '../config/Fire';

export const GetTransactions = () => {
    return Fire.firestore().collection('transactions').get()
}

export const SaveTransaction = transaction => {
    return Fire.firestore().collection('transactions').add(transaction)
}
 