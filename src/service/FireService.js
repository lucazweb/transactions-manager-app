import Fire from '../config/Fire';
import firebase from 'firebase';

export const GetTransactions = () => {
    return Fire.firestore().collection('transactions').orderBy('timestamp', 'desc').get()
}

export const SaveTransaction = transaction => {
    return Fire.firestore().collection('transactions').add(transaction)
}
 
export const DeleteTransaction = id => {
  return Fire.firestore().collection('transactions').doc(id).delete()
}

export const TimestampToDate = timestamp => {
  return  new firebase.firestore.Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
}
