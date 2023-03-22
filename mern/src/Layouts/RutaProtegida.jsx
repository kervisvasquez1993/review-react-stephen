import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export const RutaProtegida = () => {
    const { auth, loading } = useAuth();
    console.log(auth);
    if (loading) return "Cargando....";
    return <>{auth._id ? "authenticado" : <Navigate to="/" />}</>;
};
