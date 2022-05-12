import { Link } from 'react-router-dom';
import './PageWelcome.scss';
import { Container } from 'react-bootstrap';

const PageWelcome = () => {
  return (
    <main className="welcome">
      <Container>
        <h2 className="welcome__title"> Welcome! </h2>
        <Link to="authorization" style={{ border: `1px solid green`, padding: 10 }}>
          log in
        </Link>
        <Link to="registration" style={{ border: `1px solid green`, padding: 10 }}>
          sign up
        </Link>
      </Container>
    </main>
  );
};

export default PageWelcome;
