import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA3AP5cRvfRC4dTUCTFAs0u58ZTDsqRaa4",
    authDomain: "log-in-97a53.firebaseapp.com",
    projectId: "log-in-97a53",
    storageBucket: "log-in-97a53.appspot.com",
    messagingSenderId: "478285088391",
    appId: "1:478285088391:web:650457b08c524ee481da22"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp }