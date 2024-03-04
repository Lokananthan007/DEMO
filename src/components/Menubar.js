import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Menubar() {
    return (
        <Navbar className='fixed-top' expand="lg">
            <Navbar.Brand href="#home" className='ps-5'>KAR INNOVATION</Navbar.Brand>
            <Navbar.Toggle className="me-5 " aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto me-5">
                    <Nav.Link className='ps-3' href="#home">Home</Nav.Link>
                    <Nav.Link className='ps-3' href="#about">About</Nav.Link>
                    <Nav.Link className='ps-3' href="#product">Product</Nav.Link>
                    <Nav.Link className='ps-3' href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menubar;
