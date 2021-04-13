import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDymxdFMQ8M8GPGfiL4qVaJhKzYy0p5WcI",
    authDomain: "slack-clone-april11.firebaseapp.com",
    projectId: "slack-clone-april11",
    storageBucket: "slack-clone-april11.appspot.com",
    messagingSenderId: "836806942809",
    appId: "1:836806942809:web:fcab60391534054a665148"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  //firestore is a realtime database

  export { auth, provider } 
  export default db;
