import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
};

// handle Google SingIn
export const handleGoogleSingIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return signedInUser;
        })
        .catch(error => {
            console.log(error);
        });
};

// Facebook SignIn here||
export const handleFBSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
        .then((res) => {
            console.log(res)
            var user = res.user;
            user.success = true;
            return user;

        })
        .catch(error => {
            return error
            // console.log(error)
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // var email = error.email;
            // var credential = error.credential;
        });
};