import React from 'react';
import './Header.css'
import { useSelector } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase'
import logoImg from '../../images/logo-1.png'



const Header = () => {
    const cartList = useSelector((state) => state.products.cartList)
    const { user, logOut } = useFirebase()

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='p-2'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logoImg} alt="" style={{ width: '250px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-item">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/cart' ><i className="fas fa-shopping-cart custom-text-primary fs-5"></i><sup className="translate-middle badge rounded-pill bg-dark translate-middle-y">{cartList.length}</sup></Nav.Link>
                        {user.email &&
                            <div className=' d-flex justify-content-between align-items-center'>
                                <img src={user.photoURL} alt="" className=' img-fluid' style={{ width: '40px', borderRadius: '50%' }} />
                                <span className='fw-bold custom-text-primary ms-2'>{user.displayName}</span>
                            </div>}
                        {user.email ? <span onClick={logOut} className=' custom-cursor '><i className="fas fa-sign-out-alt custom-text-primary me-2 fs-5 "></i>LogOut</span>
                            :
                            <Nav.Link as={Link} to='/login'><i className="fas fa-sign-in-alt custom-text-primary me-2 fs-5"></i>Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;