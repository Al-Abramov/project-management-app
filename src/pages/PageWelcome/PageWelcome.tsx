import './PageWelcome.scss';
import { Container } from 'react-bootstrap';

const PageWelcome = () => {
  return (
    <main className="welcome ">
      <Container>
        <div className="welcome__wrapper">
          <div className="welcome__content">
            <h1 className="welcome__title">
              <span>Welcome page</span>
              <span>Project management app</span>
            </h1>
          </div>
          <div className="welcome__about">
            <div className="welcome__about-descr">
              <p>
                Приложение помогает достичь поставленные задачи отдельному человеку в команде или
                группе разработчиков.
              </p>
            </div>
            <div className="welcome__about-course">
              <p>
                Приложение выполнено в рамках курса <b>ReactJS rolling scopes school</b>
              </p>
            </div>
            <div className="welcome__about-team">
              <p className="welcome__about-team--text">Команда проекта:</p>
              <div className="welcome__container">
                <div className="item">
                  <div className="avatar"></div>
                  <a href="https://github.com/Al-Abramov" target="_blank" rel="noreferrer">
                    Алексей
                  </a>
                </div>
                <div className="item">
                  <div className="avatar"></div>
                  <a href="https://github.com/MaxTyshkevich" target="_blank" rel="noreferrer">
                    Максим
                  </a>
                </div>
                <div className="item">
                  <div className="avatar"></div>
                  <a href="https://github.com/KotoJeep" target="_blank" rel="noreferrer">
                    Антон
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default PageWelcome;
