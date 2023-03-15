import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext.js'; // Import the useAuth hook from your authentication context

const PrivateRoute = () => {
  const { isAuthenticated, userId } = useAuth(); // Get the authentication state and user ID from your context

  return isAuthenticated ? (
    <Outlet userId={userId} /> // Pass the userId as a prop to the child components
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
