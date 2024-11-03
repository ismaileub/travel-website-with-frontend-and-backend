import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <h1 className="text-4xl">Loading</h1>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;