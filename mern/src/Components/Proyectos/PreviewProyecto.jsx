import React from "react";
import { Link } from "react-router-dom";
export const PreviewProyecto = ({ proyecto }) => {
    const { nombre, _id, cliente } = proyecto;
    return (
        <div className="border-b p-5 flex ">
            <p className="flex-1">{nombre}</p>
            <Link
                to={`${_id}`}
                className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold"
            >
                Ver Proyecto
            </Link>
        </div>
    );
};
