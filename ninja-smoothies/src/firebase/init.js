import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBfe_w2WdHzJUybrYkUc7Ug0B42Jy3qdRo",
    authDomain: "udemy-ninja-smoothies-ad992.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-ad992.firebaseio.com",
    projectId: "udemy-ninja-smoothies-ad992",
    storageBucket: "udemy-ninja-smoothies-ad992.appspot.com",
    messagingSenderId: "532596718290"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()