import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='text-center my-5 w-50 mx-auto'>
            <img src={notFoundImg} className='img-fluid' alt="" />
            <br />
            <Link to='/home'>
                <Button variant='outline-primary'>Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;