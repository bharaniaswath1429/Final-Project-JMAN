import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import './Navbar.css'

const NavigationBar = ({ title, name, onLogout }) => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#6C63FF', height: '62px' }} className="p-2">
      <Container>
        <Navbar.Brand style={{ color: 'white', fontWeight: '600' }}>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <NavDropdown
              title={
                <span style={{ color: 'white', display: 'flex', alignItems: 'center', width: '150px', justifyContent:'center'}}>
                  <BsPersonCircle className="me-2 fs-3" />
                  {name}
                </span>
              }
            >
              <NavDropdown.Item 
                onClick={onLogout}
                className="d-flex align-items-center justify-content-center"
                style={{ fontWeight: '600' }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
