
// import firebase from "firebase/app";
// import 'firebase/auth'
// import 'firebase/firestore'

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getAnalytics } from 'firebase/analytics';
import 'firebase/analytics'



const firebaseConfig = {
    apiKey: "AIzaSyByUK2CXIy603cxmnRPIuJfj-AT9kve9b4",
    authDomain: "chat-app-f4ec4.firebaseapp.com",
    projectId: "chat-app-f4ec4",
    storageBucket: "chat-app-f4ec4.appspot.com",
    messagingSenderId: "991068072960",
    appId: "1:991068072960:web:a24aa5f76f5db35cdf7ce5",
    measurementId: "G-1ENEDHM2QK"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }

export default firebase