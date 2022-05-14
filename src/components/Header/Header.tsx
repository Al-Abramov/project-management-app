import styles from './Header.module.scss';
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import logo from '../../assets/icons/trello-mark.svg';

const Header = () => {
  const token = false;
  const [logging, setLogging] = useState(false);

  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="https://rs.school/react/">
            <img
              src={logo}
              width="25"
              height="25"
              className="d-inline-block align-top m-1"
              alt="App logo"
            />
            PM-app
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="main">Main</Nav.Link>
              <Nav.Link href="board">Create new board </Nav.Link>
            </Nav>
            <Form.Check type="switch" id="custom-switch" label="Check this switch" />
            {logging ? (
              <Nav className="gap-2">
                <Button variant="outline-light">Sign Out</Button>
                <Button variant="light">Profile</Button>
              </Nav>
            ) : (
              <Nav className="gap-2">
                <Button variant="outline-light">Sign In</Button>
                <Button variant="light">Sign Up</Button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
