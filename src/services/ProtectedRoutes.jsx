import { useEffect } from 'react'
import { useAuth } from '../context/AuthenticContext'
import { useNavigate } from 'react-router-dom';
import { SIGNIN } from '../utils/routeNames';
export default function ProtectedRoutes({ children }) {
  const { authenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(function () {
    if (!authenticated) navigate(SIGNIN)
  }, [authenticated, navigate])
  return children
}
