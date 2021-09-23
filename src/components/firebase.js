import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBPXbHduqt6sl3xj7q_oHkTPENyN8ewl9U",
  authDomain: "sieuviet-caro.firebaseapp.com",
  databaseURL: "https://sieuviet-caro-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sieuviet-caro",
  storageBucket: "sieuviet-caro.appspot.com",
  messagingSenderId: "14683667369",
  appId: "1:14683667369:web:752413cb434d678f5722b8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const auth = firebase.auth();
