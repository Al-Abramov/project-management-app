import { Navigate, useLocation } from 'react-router-dom';

interface PropsRequireAuth {
  children: JSX.Element;
}

const NotRequireAuth = ({ children }: PropsRequireAuth) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (token) {
    return <Navigate to="/main" state={{ from: location }} replace />;
  }

  return children;
};

export default NotRequireAuth;
