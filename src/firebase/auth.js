import firebase from 'firebase/app';
import 'firebase/auth';
import './config';

var provider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = () => {
    firebase
        .auth()
        .signInWithRedirect(provider)
        .then(result => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        })
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
};

export const googleSignInRedirectResult = () => {
    // [START auth_google_signin_redirect_result]
    firebase
        .auth()
        .getRedirectResult()
        .then(result => {
            if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // ...
            }
            // The signed-in user info.
            var user = result.user;
        })
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    // [END auth_google_signin_redirect_result]
};

export const updateUserSignedIn = props => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            props.signIn(user.uid, user.displayName);
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
        .then(() => {
            // Sign-out successful.
        })
        .catch(error => {
            // An error happened.
        });
};
