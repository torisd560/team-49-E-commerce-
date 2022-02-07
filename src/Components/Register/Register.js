import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const [registerData, setRegisterData] = useState({})


    const { error, registerEmailPassword, setUserName } = useAuth();

    const navigate = useNavigate();

    const handleOnblur = e => {
        const field = e.target.type;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        registerEmailPassword(registerData.email, registerData.password, navigate)
        setUserName(registerData.text)
        e.target.value = " "
    }


    return (
        <div className='w-50 mx-auto my-5'>
            <form onSubmit={handleSubmit} >
                <h3 className='text-center text-primary mt-5'>Please Sign Up</h3>
                <div className="mb-3 my-5">
                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-user text-primary me-2"></i>Full Name</label>
                    <input
                        onBlur={handleOnblur}
                        type="text"
                        className="form-control"
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square text-primary me-2"></i>Email</label>
                    <input
                        onBlur={handleOnblur}
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
                <Button type="submit" variant="primary" className=" text-white me-3">Sign Up</Button>

                <p className=' mt-4 text-center '>Already have an Account? <Link to='/login'> Please Login</Link> </p>

                <p className='text-danger fw-bold text-center'>{error}</p>
            </form>
        </div>
    );
};

export default Register;