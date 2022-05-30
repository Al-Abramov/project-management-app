import { Navigate, useLocation } from 'react-router-dom';

interface PropsRequireAuth {
  children: JSX.Element;
}

const RequireAuth = ({ children }: PropsRequireAuth) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
