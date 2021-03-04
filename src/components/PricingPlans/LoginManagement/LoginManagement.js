import React from 'react';
import "./LoginManagement.css";
import googleIcon from "../../../images/ImageAndIcon/google.png";
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './firebase.config'
import { useHistory, useLocation } from 'react-router-dom';

const LoginManagement = () => {
    const history = useHistory();
    const location = useLocation()
    let { from } = location.state || { form: { pathname: "/" } }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                sessionStorage.setItem("userEmail", result.user.email);
                history.replace(from)
            }).catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="main_container ">
            <div>
                <div className="login_container col-lg-12 col-md-12 col-sm-12">
                    <div>
                        <h4 className="text-center mb-3">Login With</h4>
                        <button onClick={handleGoogleSignIn}>
                            <img className='googleIcon' src={googleIcon} alt="" />
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginManagement;