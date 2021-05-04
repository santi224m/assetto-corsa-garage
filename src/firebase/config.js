import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import keys from '../config/keys';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: keys.firebaseApiKey,
  authDomain: keys.firebaseAuthDomain,
  projectId: keys.firebaseProjectId,
  databaseURL: keys.firebaseDatabaseURL,
  storageBucket: keys.firebaseStorageBucket,
  messagingSenderId: keys.firebaseMessagingSenderId,
  appId: keys.firebaseAppId,
  measurementId: keys.firebaseMeasurementId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebase.database();
const fsStorage = firebase.storage();
const storageRef = fsStorage.ref();
export const imagesRef = storageRef.child('images/mods');
export const imgagesBrandsRef = storageRef.child('images/brands');
