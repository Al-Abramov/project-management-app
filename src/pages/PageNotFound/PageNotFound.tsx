import Header from '../../components/Header/Header';
import { Container } from 'react-bootstrap';

const PageNotFound = () => {
  return (
    <>
      <Header />
      <Container>
        <h2 className="text-center mt-3">Page Not Found 404</h2>
      </Container>
    </>
  );
};

export default PageNotFound;
