import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import React from 'react';
import {
    BrowserRouter as Router, Link
} from "react-router-dom";

// style={{backgroundColor: "#28a745" , color:"#fff"}}

function AdminNav() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ background: '#335f00', color: 'white' }}>
                <Navbar.Brand href="#home" style={{ color: 'white' }}>Campus Recruitment System</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {/* <Nav.Link href="#memes" >Sign - up</Nav.Link> */}
                        <Nav.Link href="#deets" style={{ color: 'white' }} >Sign-In</Nav.Link>
                        <NavDropdown title="Sign up" id="collasible-nav-dropdown" style={{ color: 'white' }}>Sign up
                            <NavDropdown.Item href="#action/3.2" style={{ background: '#335f00', color: 'white' }} >Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" style={{ background: '#335f00', color: 'white' }} >Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" style={{ background: '#335f00', color: 'white' }} >Action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>

    )

}

export default AdminNav;

