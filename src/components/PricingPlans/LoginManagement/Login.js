import React from 'react';
import "./Login.css";
import googleIcon from "../../../images/ImageAndIcon/google.png";
import login_bg from "../../../images/ImageAndIcon/login-bgImg.png"
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Col, Container, Row, } from "react-bootstrap";
import {
    handleFBSignIn,
    handleGoogleSingIn,
    initializeLoginFramework
} from './LoginManager';
import { toast } from 'react-toastify';
toast.configure()

const Login = () => {
    const history = useHistory();
    const location = useLocation()
    let { from } = location.state || { form: { pathname: "/" } }
    initializeLoginFramework();

    const googleSingIn = () => {
        handleGoogleSingIn()
            .then(res => {
                handleResponse(res.email, true)
            })
    }

    const fBSignIn = () => {
        handleFBSignIn()
            .then(res => {
                const token = res.credential.accessToken ? "token" : undefined;
                if (res) {
                    handleResponse(res.email || token, true)
                }
            })

    };

    const handleResponse = (res, redirect) => {
        sessionStorage.setItem("userInfo", res);
        if (!res) {
            toast.error('Please try again!',
                { position: toast.POSITION.TOP_CENTER })
        } else {
            history.replace(from);
        };
    };

    return (
        <Container fluid>
            <Row>
                <Col sm={12} md={12} lg={12} xl={3}>
                    <div className="pt-5 mt-2 px-2">
                        <NavLink to="/" className="brand_name home_link">
                            POWER <span>X</span>
                        </NavLink>
                        <h2 className="pt-4 signUp_title">Sign up to continue</h2>
                        <br />
                        <button onClick={googleSingIn}
                            className="google_btn border-0 w-100
                             rounded text-white d-flex 
                             align-items-center"
                        >
                            <img className='googleIcon img-fluid bg-white p-2'
                                src={googleIcon} alt=""
                            />
                            <p id="google_title" className="ml-auto mr-auto mb-0">Continue with Google</p>
                        </button>
                        <button onClick={fBSignIn}
                            className="google_btn border-0 w-100 mt-4
                             rounded text-white d-flex 
                             align-items-center"
                        >
                            <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                                alt="" className="googleIcon img-fluid bg-white p-1" />
                            <p id="google_title" className="ml-auto mr-auto mb-0">Continue with Facebook</p>
                        </button>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={12} xl={9}
                    className="px-0 pt-xl-0 pt-4">
                    <img src={login_bg} alt=""
                        className="img-fluid loginBg_img h-100"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;