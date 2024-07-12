import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isSignedIn, children }) => {
    if (!isSignedIn) {
        return <Navigate to="/signin" />;
    }
    return children;
};

export default ProtectedRoute;
