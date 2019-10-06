import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDxx_O7u2lM8C2QQ6LSXABq2kJnLceeZB8",
    authDomain: "transactions-manager.firebaseapp.com",
    databaseURL: "https://transactions-manager.firebaseio.com",
    projectId: "transactions-manager",
    storageBucket: "transactions-manager.appspot.com",
    messagingSenderId: "1057826768541",
    appId: "1:1057826768541:web:d90dae6970bdef2a5ef674",
    measurementId: "G-3PPZ58VSZC"
  };

  const Fire = firebase.initializeApp(config);
  export default Fire;