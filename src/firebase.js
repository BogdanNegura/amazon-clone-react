import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCj3TKgNSX2Egtzh9w1g1cZOns4mMDLqUY",
  authDomain: "clone-68140.firebaseapp.com",
  databaseURL: "https://clone-68140.firebaseio.com",
  projectId: "clone-68140",
  storageBucket: "clone-68140.appspot.com",
  messagingSenderId: "960678936727",
  appId: "1:960678936727:web:7188447cd429a3528fa9d2",
  measurementId: "G-1T1FB1QM10",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
