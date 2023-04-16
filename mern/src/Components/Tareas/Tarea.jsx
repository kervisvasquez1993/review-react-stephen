import React from "react";

export const Tarea = ({ tarea }) => {
    console.log(tarea);
    const { descripcion, estado, fechaEntrega, nombre, prioridad } = tarea;
    return (
        <div className="border-b p-5 flex justify-between items-center">
            <div>
                <p className="mb-2 text-xl">{nombre}</p>
                <p className="mb-2 text-sm text-gray-500">{descripcion}</p>
                <p className="mb-2 text-xl ">{fechaEntrega}</p>
                <p className="mb-2 text-gray-600 mb-1">
                    Prioridad : {prioridad}
                </p>
            </div>
            <div className="flex gap-2">
                <button className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">
                    Editar
                </button>
                {estado ? (
                    <button className="bg-sky-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">
                        Completa
                    </button>
                ) : (
                    <button className="bg-gray-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">
                        Incompleta
                    </button>
                )}

                <button className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">
                    Incompleta
                </button>
            </div>
        </div>
    );
};
