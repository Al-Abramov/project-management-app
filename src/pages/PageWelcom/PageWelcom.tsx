import { Link } from 'react-router-dom';

const PageWelcom = () => {
  return (
    <div>
      <h2> welcom page</h2>
      <Link to="authorization">log in</Link>
      <Link to="authorization">sign up</Link>
    </div>
  );
};

export default PageWelcom;
