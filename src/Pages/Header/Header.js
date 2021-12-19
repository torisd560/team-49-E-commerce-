import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.png'
import { useSelector } from 'react-redux';

const Header = () => {
    const cartList = useSelector((state) => state.products.cartList)

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className = 'p-2'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logoImg} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-item">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/cart' ><i className="fas fa-shopping-cart custom-text-primary fs-5"></i><sup className="translate-middle badge rounded-pill bg-dark translate-middle-y">{cartList.length}</sup></Nav.Link>
                        <Nav.Link as={Link} to='/login'><i className="far fa-user custom-text-primary me-2 fs-5"></i></Nav.Link>
                        <Nav.Link as={Link} to='/login'><i className="fas fa-sign-in-alt custom-text-primary me-2 fs-5"></i>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;