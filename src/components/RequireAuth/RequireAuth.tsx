import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

export function RequireAuth() {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.userSlice);

  if (!user) {
    return <Navigate to={'/login'} state={{ from: location }} replace />;
  }

  return <Outlet/>;
}
