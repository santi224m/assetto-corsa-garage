import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: 'AIzaSyBzKc8dYF4PxhxMxJnAsc92SEK55fH0s9c',
    authDomain: 'assettocorsagarage.firebaseapp.com',
    projectId: 'assettocorsagarage',
    storageBucket: 'assettocorsagarage.appspot.com',
    messagingSenderId: '220523058474',
    appId: '1:220523058474:web:c21aef7bfe3e5139263a53',
    measurementId: 'G-8Q4JQ8FJNX',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
