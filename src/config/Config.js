import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzH7_ONaLgTy_NYh9t4zr6Hg9ykX75f84",
    authDomain: "ecommerce-store-15f45.firebaseapp.com",
    projectId: "ecommerce-store-15f45",
    storageBucket: "ecommerce-store-15f45.appspot.com",
    messagingSenderId: "162805496672",
    appId: "1:162805496672:web:c329e94eba0232f4e4bc05",
    measurementId: "G-6QMDEZZ8L8"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

export {auth,db,storage}