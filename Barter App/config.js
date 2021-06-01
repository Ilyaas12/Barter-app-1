import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDExQ0VUTbOg4CCZ3JsdD3oIbJIuqfO1WY",
    authDomain: "barter-system-app-9ffb7.firebaseapp.com",
    projectId: "barter-system-app-9ffb7",
    storageBucket: "barter-system-app-9ffb7.appspot.com",
    messagingSenderId: "597475061760",
    appId: "1:597475061760:web:e94f34eefe5db6e1ffa8e5",
    measurementId: "G-CCMWCQK0Y5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();