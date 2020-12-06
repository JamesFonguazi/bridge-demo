import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAHcAxBuiR2ZSbLjHRJjKPYbJALhZccOOg",
  authDomain: "fir-app-d52dc.firebaseapp.com",
  databaseURL: "https://fir-app-d52dc.firebaseio.com",
  projectId: "fir-app-d52dc",
  storageBucket: "fir-app-d52dc.appspot.com",
  messagingSenderId: "786411444871",
  appId: "1:786411444871:web:2168ad6c2c7c82b1a0f622"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
