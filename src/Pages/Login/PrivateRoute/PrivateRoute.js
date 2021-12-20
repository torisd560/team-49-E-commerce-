import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase'


const PrivateRoute = ({ children }) => {

    const location = useLocation()
    const { user, isLoading } = useFirebase()

    if (isLoading) {
        return <div className='text-center my-5'><Spinner animation="border" variant="danger" /></div>
    }
    if (user.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default PrivateRoute;