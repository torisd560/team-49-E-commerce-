import React from 'react';
import './Login.css'
import { Button, Col, Row } from 'react-bootstrap';
import loginImg from '../../images/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({})

    const { error, googleSignIn, loginEmailPassword } = useAuth();

    const navigate = useNavigate();

    const handleOnblur = e => {
        const field = e.target.type;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginEmailPassword(loginData.email, loginData.password, navigate)
    }

    return (
        <div>
            <Row xs={12} md={12} className='g-4 m-0 p-5 d-flex justify-content-center align-items-center'>
                <Col>
                    <div className='my-5 mx-auto w-75'>
                        <form onSubmit={handleSubmit}>
                            <h3 className='text-center text-primary my-3'>Please Sign</h3>
                            <div className="mb-3 my-5">
                                <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square text-primary me-2"></i>E-mail</label>
                                <input onBlur={handleOnblur}
                                    type="email"
                                    className="form-control"
                                    required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key text-primary me-2"></i>Password</label>
                                <input
                                    onBlur={handleOnblur}
                                    type="password"
                                    className="form-control"
                                    required />
                            </div>

                            <div>
                                <p className='custom-cursor-style text-primary'> Forgot Password ? </p>
                                <Button type="submit" variant="primary" className='mt-2 px-4  py-2'>Login</Button>
                                <Button variant="danger" onClick={() => googleSignIn(navigate)} className='ms-3 mt-2 py-2 '><i className="fab fa-google text-white fs-6 px-4 py-1 "></i></Button>
                                <p className=' mt-4'>Don't have an account?<Link to='/register'> Sign Up</Link></p>
                                <p className='text-danger fw-bold mt-4'>{error}</p>
                            </div>

                        </form>
                    </div>
                </Col>
                <Col >
                    <img src={loginImg} alt="" className='img-fluid' />
                </Col>
            </Row>
        </div>
    );
};

export default Login;