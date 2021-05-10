import React from 'react';
import "./LoginManagement.css";
import googleIcon from "../../../images/ImageAndIcon/google.png";
import login_bg from "../../../images/ImageAndIcon/loginBg.png"
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './firebase.config'
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Container, Row, } from "react-bootstrap";
//DjJFSFs_skkd()263LYdjIdk4#@(*hggg&&HtCPhE&&^^^LKOJjh
//DjJFSFs_skkd()263LYdjIdk4#@(*hggg&&HtCPhE&&^^^LKOJj33
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
        <Container fluid>
            <Row>
                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className="pt-5 mt-2">
                        <h2 className="brand_name">
                            POWER <span>X</span>
                        </h2>
                        <br />
                        <button onClick={handleGoogleSignIn}
                            className="google_btn border-0 w-100
                             rounded text-white d-flex 
                             align-items-center"
                        >
                            <img className='googleIcon img-fluid bg-white p-1'
                                src={googleIcon} alt=""
                            />
                            <p id="google_title" className="ml-auto mr-auto mb-0">Continue with Google</p>
                        </button>
                    </div>
                </Col>
                <Col sm={12} md={9} lg={9} xl={9} className="bg-info login_img">
                    <img src={login_bg} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default LoginManagement;