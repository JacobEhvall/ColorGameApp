import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVaD90626DJy2c5Eo7zPixCyF03n_opsw",
    authDomain: "colorgameapp-52619.firebaseapp.com",
    projectId: "colorgameapp-52619",
    storageBucket: "colorgameapp-52619.appspot.com",
    messagingSenderId: "880698895796",
    appId: "1:880698895796:web:ea527eef467532524016e1"
  }

  const FirebaseApp = firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()