import { Link } from 'react-router-dom';
import './PageWelcome.scss';
import { Button, Container } from 'react-bootstrap';

const PageWelcome = () => {
  return (
    <main className="welcome ">
      <Container>
        <div className="welcome__content">
          <h1 className="welcome__title"> Project management app </h1>
          <span className="welcome__subtitle mt-3">Log in or register to get started</span>
          <div className="welcome__buttons d-flex gap-2 mt-3">
            <Button href="authorization" variant="outline-dark" size="lg" className="px-5">
              log in
            </Button>
            <Button href="registration" variant="dark" size="lg" className="px-5">
              sign up
            </Button>
          </div>
        </div>
        <div className="welcome__about"></div>
      </Container>
    </main>
  );
};

export default PageWelcome;
