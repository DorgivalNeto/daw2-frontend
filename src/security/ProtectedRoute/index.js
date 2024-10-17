import React from "react";
import { Navigate } from "react-router-dom";
import UseStorage from "../Authprovider/useStorage";

const ProtectedRoute = ({ element }) => {
    const { token } = UseStorage();

    return token ? element: <Navigate to="/login" />
}

export default ProtectedRoute;