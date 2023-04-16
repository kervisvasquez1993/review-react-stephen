import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useProyecto from "../../hooks/useProyectos";
import { Modal } from "../../Views";
import { ListTareas } from "../../Components/";

export const ShowProject = () => {
    const params = useParams();
    const {
        proyecto,
        getProject,
        loadingProject,
        handleFormProyecto,
        formModalProyecto,
    } = useProyecto();
    const [modal, setModal] = useState(false);
    useEffect(() => {
        getProject(params.id);
    }, []);
    const { nombre, descripcion, fechaEntrega, cliente } = proyecto;
    // console.log(proyecto)
    return (
        <div>
            {loadingProject ? (
                "Cargando"
            ) : (
                <>
                    <div className="flex justify-between ">
                        <h1 className="font-black text-4xl">{nombre}</h1>
                        <div className="flex items-center text-gray-400 hover:text-black gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                            </svg>
                            <Link
                                className="uppercase font-bold"
                                to={`/proyectos/edit/${params.id}`}
                            >
                                Editar
                            </Link>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="text-sm px-5 py-3
                     w-full flex gap-2 md:w-auto rounded-lg uppercase font-bold items-center justify-center bg-sky-400 mt-5 text-white text-center"
                        onClick={handleFormProyecto}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Nueva Tarea
                    </button>
                    <p className="font-bold text-xl mt-10">
                        Tareas del Proyecto
                    </p>
                    <div className="bg-white shadow mt-10 rounded-lg">
                        {proyecto.tareas?.length === 0 ? (
                            <p className="text-center my-5 p-10">
                                No hay tarea en este proyecto
                            </p>
                        ) : (
                            <ListTareas tareas={proyecto.tareas} />
                        )}
                    </div>
                    <Modal />
                </>
            )}
        </div>
    );
};
