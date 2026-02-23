import { Navigate, Outlet } from 'react-router-dom';

const AUTH_KEY = 'apex_auth_v1';

export function ProtectedRoute() {
  const isAuth = localStorage.getItem(AUTH_KEY) === '1';
  if (!isAuth) return <Navigate to="/login" replace />;
  return <Outlet />;
}
