import React from 'react';
import './Dropdown.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Dropdown = () => {
    return (
        <Navbar variant="secondary" bg="secondary" expand="lg" className = 'field-dropdown'>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav className='nav-item'>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Field1"
                           
                        >
                            <NavDropdown.Item >Field2</NavDropdown.Item>
                            <NavDropdown.Item >Field3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <p className = 'ms-auto'>Lat: | Long</p>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Dropdown;