import styles from './Header.module.scss';

import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import logo from '../../assets/icons/trello-mark.svg';
import { Link } from 'react-router-dom';

import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hook/hook';
import { logout } from '../../store/authSlice/authSlice';

const Header = () => {
  const navigation = useNavigate();
  const token = localStorage.getItem('token');

  const reducer = useAppDispatch();

  const logoutHandle = () => {
    reducer(logout());
    navigation('/');
  };
  const [logging, setLogging] = useState(false);
  const [sticky, setSticky] = useState(false);

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      //sticky={sticky ? 'top' : undefined}
      //fixed={sticky ? undefined : 'top'}
    >
      <Container>
        <Navbar.Brand href="/">
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
            <Link to="main">Main</Link>
            <Link to="board">Create new board </Link>
          </Nav>
          <Form.Check type="switch" id="custom-switch" className="py-2" label="" />
          {logging ? (
            <Nav className="gap-2">
              <Button variant="outline-light">Sign Out</Button>
              <Button variant="light" onClick={logoutHandle}>
                Profile
              </Button>
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
  );
};

export default Header;
