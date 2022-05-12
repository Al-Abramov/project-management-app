import { Navigate, useLocation } from 'react-router-dom';

interface PropsRequireAuth {
  children: JSX.Element;
}

const RequireAuth = ({ children }: PropsRequireAuth) => {
  /*  получаем token из redux  */
  const token = false;
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
