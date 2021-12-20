import React from 'react';
import { Button } from 'react-bootstrap'
import loginBg from '../../images/login.png'
import useFirebase from '../hooks/useFirebase';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const { googleSign } = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            <Header></Header>
            <div className='text-center w-50 mx-auto my-5'>
                <img src={loginBg} alt="" className='img-fluid' />
                <Button onClick={() => googleSign(navigate, location)} className='custom-button rounded-pill me-5'>Google Signin</Button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;