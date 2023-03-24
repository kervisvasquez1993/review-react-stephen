import React, { useState } from "react";

export const FormularioProyecto = () => {
    const [nameProject, setNameProject] = useState("");
    const [descriptionProject, setDescriptionProject] = useState("");
    const [dateEntregaProject, setDateEntregaProject] = useState("");
    const [client, setClient] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameProject);
        console.log(descriptionProject);
        console.log(dateEntregaProject);
        console.log(client);
    };
    return (
        <form
            className="bg-white py-10 px-5 rounded-lg shadow"
            onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label
                    htmlFor="nombre"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Nombre de Proyecto
                </label>
                <input
                    id="nombre"
                    type="text"
                    className="border w-full p-2 mt-2 placeholder-gray-400"
                    placeholder="Nombre del Proyecto"
                    value={nameProject}
                    onChange={(e) => setNameProject(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label
                    htmlFor="fecha-entrega"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Fecha de Entrega
                </label>
                <input
                    id="fecha-entrega"
                    type="date"
                    className="border w-full p-2 mt-2 placeholder-gray-400"
                    placeholder="Fecha de Entrega"
                    value={dateEntregaProject}
                    onChange={(e) => setDateEntregaProject(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="cliente"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Cliente
                </label>
                <input
                    id="cliente"
                    type="text"
                    className="border w-full p-2 mt-2 placeholder-gray-400"
                    placeholder="Cliente"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="description"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Descripcion
                </label>
                <textarea
                    id="description"
                    type="text"
                    className="border w-full p-2 mt-2 placeholder-gray-400"
                    value={descriptionProject}
                    onChange={(e) => setDescriptionProject(e.target.value)}
                />
            </div>
            <input
                type="submit"
                value={"Crear Proyecto"}
                className={
                    "bg-sky-600 w-full p-2 uppercase text-white font-bold "
                }
            />
        </form>
    );
};
