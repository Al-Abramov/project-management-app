import './Header.scss';
import { Container, Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../../assets/icons/trello-mark.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hook/hook';
import { logout } from '../../store/userSlice/userSlice';

const Header = () => {
  const navigation = useNavigate();

  const reducer = useAppDispatch();

  const logoutHandle = () => {
    reducer(logout());
    navigation('/');
  };

  const [sticky, setSticky] = useState(false);
  const isLog = useAppSelector((state) => state.authReducer.id);
  const nameProfile = localStorage.getItem('name'); //useAppSelector((state) => state.authReducer.name);

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
              {isLog && (
                <Nav.Link as={NavLink} to="main">
                  Создать новую доску
                </Nav.Link>
              )}
            </Nav>
            <Form.Check type="switch" id="custom-switch" className="py-2" label="" />
            {isLog ? (
              <Nav>
                <NavDropdown menuVariant="light" title={nameProfile} id="nav-dropdown">
                  <NavDropdown.Item to={'edit-profile'} as={Link}>
                    Профиль
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to={'/'} onClick={logoutHandle} as={Link}>
                    Выйти
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav className="gap-2">
                <Nav.Link as={NavLink} to="authorization">
                  Войти
                </Nav.Link>
                <Nav.Link as={NavLink} to="registration">
                  Зарегистрироваться
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
