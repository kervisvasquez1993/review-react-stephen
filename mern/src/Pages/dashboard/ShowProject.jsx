import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProyecto from "../../hooks/useProyectos";

const ShowProject = () => {
    const params = useParams();
    const { proyecto, getProject, loadingProject } = useProyecto();
    useEffect(() => {
        getProject(params.id);
    }, []);
    const { nombre, descripcion, fechaEntrega, cliente } = proyecto;
    return (
        <div>
            {loadingProject ? (
                "Cargando"
            ) : (
                <h1 className="font-black text-4xl">{nombre}</h1>
            )}
        </div>
    );
};

export default ShowProject;
