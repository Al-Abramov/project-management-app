import './Footer.scss';
import rs_logo from '../../assets/icons/rs-logo.svg';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Navbar bg="dark" variant="dark">
        <Container className="flex-column flex-md-row align-items-center align-content-center justify-content-center flex-wrap">
          <Navbar.Brand href="https://rs.school/react/">
            <img
              src={rs_logo}
              // width="25"
              height="35"
              className="d-inline-block align-top m-1"
              alt="App logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/Al-Abramov">Alexey Abramov</Nav.Link>
            <Nav.Link href="https://github.com/MaxTyshkevich">Max Tyshkevich</Nav.Link>
            <Nav.Link href="https://github.com/KotoJeep">Anton Volkov</Nav.Link>
          </Nav>
          <div className="footer__year">2022</div>
        </Container>
      </Navbar>
    </footer>
  );
};
export default Footer;
