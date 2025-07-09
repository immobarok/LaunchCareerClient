import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/UseAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading, setShowLogin, setRedirectPath, signOutUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      setRedirectPath(location.pathname); 
      setShowLogin(true);
    }
  }, [user, loading, location, navigate, setRedirectPath, setShowLogin]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-2xl text-lime-500"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <p className="text-red-600 text-lg font-medium">
            Please login to show application list
            <span className='underline text-blue-500 pl-4 cursor-pointer' onClick={()=>setShowLogin(true)}>Login</span>
          </p>
        </div>
      </div>
    );
  }
  

  return children;
};

export default PrivateRoute;
