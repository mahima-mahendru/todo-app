import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBKgVf-5glBVNow7bCMqWn3zQlD_EmviPI",
    authDomain: "todo-app-8e104.firebaseapp.com",
    projectId: "todo-app-8e104",
    storageBucket: "todo-app-8e104.appspot.com",
    messagingSenderId: "157039421940",
    appId: "1:157039421940:web:b0c46ab3f97ddd66f9b1a1"
  };
  firebase.initializeApp(firebaseConfig);
  const db =firebase.firestore();
  export {db};
  