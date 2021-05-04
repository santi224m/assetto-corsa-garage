import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import './config';
import { db } from './config';

export const googleSignIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithRedirect(provider)
    .catch(error => {
      console.log(error);
    });
};

export const updateUserSignedIn = props => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      db.ref('users/' + user.uid).on('value', snapshot => {
        if (!snapshot.exists()) {
          // Add new users to database
          db.ref('users/' + user.uid).set({
            _id: user.uid,
            userName: user.displayName,
            modsVerified: 0
          });
          props.signIn(user.uid, user.displayName, 0);
        } else {
          const data = snapshot.val();
          props.signIn(data._id, data.userName, data.modsVerified);
        }
      });
    } else {
      // No user is signed in.
      props.signOut();
    }
  });
};

export const signUserOut = () => {
  firebase
    .auth()
    .signOut()
    .catch(error => {
      // An error happened.
      console.log(error);
    });
};
