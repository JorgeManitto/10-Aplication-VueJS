import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAaQQYX3fbQw9O_0U2ODy5BgrRZVFVOhQ8",
    authDomain: "vue-full-course-548ca.firebaseapp.com",
    projectId: "vue-full-course-548ca",
    storageBucket: "vue-full-course-548ca.appspot.com",
    messagingSenderId: "763309650739",
    appId: "1:763309650739:web:6fd60e017a62593cbb4446"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  export const chatsRef= db.ref('Chat');
  export default firebase;
