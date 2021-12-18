import React from 'react';
import './Login.css'
import { Button } from 'react-bootstrap'
import loginBg from '../../images/login.png'
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {googleSign} = useFirebase;
    
    return (
        <div className='login-page'>
                <img src={loginBg} alt="" />
            <div>
                <Button onClick={googleSign} variant = 'outline-primary' className = 'b-0'>Google SignIn</Button>
            </div>
        </div>
    );
};

export default Login;