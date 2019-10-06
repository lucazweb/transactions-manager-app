import firebase from 'firebase';
import Fire from '../config/Fire';

export const SaveTransaction = transaction => {
    transaction.timestamp = firebase.firestore.Timestamp.fromDate(new Date());
    return Fire.firestore().collection('transactions').add(transaction)
}