import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Component }) => {
    const authenticate = useSelector((state)=>state.auth.authenticate);
    
    return (
        authenticate == true ? <Component /> : <Navigate to="/login" />

    )
}

export default PrivateRoute
