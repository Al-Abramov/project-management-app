import { Link } from 'react-router-dom';
import './PageWelcome.scss';
import { Button, Container } from 'react-bootstrap';

const PageWelcome = () => {
  return (
    <main className="welcome ">
      <Container>
        <div className="welcome__wrapper">
          <div className="welcome__content">
            <h1 className="welcome__title"> Project management app </h1>
            <span className="welcome__subtitle mt-3">Log in or register to get started</span>
            <div className="welcome__buttons d-flex gap-2 mt-3">
              <Button
                href="authorization"
                variant="outline-primary"
                size="lg"
                className="px-5 welcome__btn-light"
              >
                <Link to={'authorization'} className={'btn-light__link'}>
                  log in
                </Link>
              </Button>
              <Button variant="primary" size="lg" className="px-5">
                <Link to={'registration'} className={'welcome__btn'}>
                  sign up
                </Link>
              </Button>
            </div>
          </div>
          <div className="welcome__about">
            <div className="welcome__about-descr">
              Приложение помогает достичь поставленные задачи отдельному человеку в команде или
              группе разработчиков.
            </div>
            <div className="welcome__about-course">
              Приложение выполнено в рамках курса ReactJS rolling scopes school
            </div>
            <div className="welcome__about-team">
              Над приложением работали: Alexey Abramov, Max Tyshkevich, Anton Volkov
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default PageWelcome;
