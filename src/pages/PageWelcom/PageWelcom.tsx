import { Link } from 'react-router-dom';

const PageWelcom = () => {
  return (
    <div>
      <h2> welcom page</h2>
      <Link to="authorization" style={{ border: `1px solid green`, padding: 10 }}>
        log in
      </Link>
      <Link to="registration" style={{ border: `1px solid green`, padding: 10 }}>
        sign up
      </Link>
    </div>
  );
};

export default PageWelcom;
