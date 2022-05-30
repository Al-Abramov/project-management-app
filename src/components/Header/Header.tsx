import './Header.scss';
import { Container, Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../../assets/icons/trello-mark.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hook/hook';
import { logout } from '../../store/userSlice/userSlice';

const Header = () => {
  const navigation = useNavigate();
  const token = localStorage.getItem('token');

  const reducer = useAppDispatch();

  const logoutHandle = () => {
    reducer(logout());
    navigation('/');
  };
  const [logging, setLogging] = useState(true);
  const [sticky, setSticky] = useState(false);
  //useappselector
  const changeColor = () => {
    window.scrollY >= 40 ? setSticky(true) : setSticky(false);
  };
  window.addEventListener('scroll', changeColor);

  return (
    <header className="header-sticky">
      <Navbar expand="lg" bg={sticky ? 'light' : 'primary'} variant={sticky ? 'light' : 'dark'}>
        <Container>
          <Navbar.Brand to="/" as={Link}>
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
              <Nav.Link as={NavLink} to="main">
                Main
              </Nav.Link>
              <Nav.Link as={NavLink} to="board">
                Create new board
              </Nav.Link>
            </Nav>
            <Form.Check type="switch" id="custom-switch" className="py-2" label="" />
            {logging ? (
              <Nav>
                <NavDropdown menuVariant="light" title={'profileName'} id="nav-dropdown">
                  <NavDropdown.Item href="#action1">settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action1">Sign out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav className="gap-2">
                <Nav.Link as={NavLink} to="authorization">
                  Sign In
                </Nav.Link>
                <Nav.Link as={NavLink} to="registration">
                  Sign Up
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
