import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaBBFfEO3s05Cq2qZpUUf-1A1Lkn9CiWo",
    authDomain: "fir-adbbd.firebaseapp.com",
    projectId: "fir-adbbd",
    storageBucket: "fir-adbbd.appspot.com",
    messagingSenderId: "756738506136",
    appId: "1:756738506136:web:b63943d530588982f2ffed",
    measurementId: "G-NBCZ9R3RME"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig); //iniciar firebase

const db=firebaseApp.firestore(); //base de datos
const auth=firebase.auth(); //autenticacion

export {db,auth};