import React from 'react';
import { Button } from 'react-bootstrap'
import loginBg from '../../images/login.png'
import useFirebase from '../hooks/useFirebase';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Login = () => {
    const { googleSign } = useFirebase();
    return (
        <div>
            <Header></Header>
            <div className='text-center w-50 mx-auto'>
                <img src={loginBg} alt="" className='img-fluid' />
                <Button onClick={googleSign} variant='outline-primary' className='b-0'>Google SignIn</Button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;