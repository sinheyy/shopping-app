import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticate, Component }) => {
    return (
        authenticate == true ? <Component /> : <Navigate to="/login" />

    )
}

export default PrivateRoute
