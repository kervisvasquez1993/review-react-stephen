import { Outlet, Navigate } from "react-router-dom";
import  useProyecto from "../../hooks/useProyectos";
import  useAuth from "../../hooks/useAuth";
// import useAuth from "../../hooks/useAuth";
export const Proyectos = () => {
    console.log(useProyecto());
    // console.log(useAuth());
    return (
        <>
            <h1 className="text-4xl font-black">Proyectos</h1>
        </>
    );
};


