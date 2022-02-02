import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navLogo from '../../images/vs-large-default.svg'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='py-3'>
                    <Navbar.Brand href="#home">
                        <img src={navLogo} alt="" className='img-fluid' style={{ width: '154px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-item">
                            <Nav.Link as={Link} to='book'>Book</Nav.Link>
                            <Nav.Link as={Link} to='destinations'>Destinations</Nav.Link>
                            <Nav.Link as={Link} to='flyUs'>Fly With Us</Nav.Link>
                            <Nav.Link as={Link} to='flyingClub'>Flying Club</Nav.Link>
                        </Nav>
                        <NavDropdown title="India-English">
                            <NavDropdown.Item href="#action/3.1">India</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;