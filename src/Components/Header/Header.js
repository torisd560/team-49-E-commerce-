import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {

    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-4'>
                <Container>
                    <Navbar.Brand href="#home">
                        <i className ="fas fa-hamburger fs-3 text-warning me-2"></i> Burger House
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-item">
                            {user.email &&
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <img src={user.photoURL} alt="" className=' img-fluid' style={{ width: '40px', borderRadius: '50%' }} />
                                    <span className='fw-bold text-white  ms-2'>{user.displayName}</span>
                                </div>}
                            {user.email ? <span onClick={logOut} className=' custom-cursor text-white '><i className="fas fa-sign-out-alt me-2 fs-5 "></i>LogOut</span>
                                :
                                <Nav.Link as={Link} to='/login'><i className="fas fa-sign-in-alt custom-text-primary me-2 fs-5"></i>Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;