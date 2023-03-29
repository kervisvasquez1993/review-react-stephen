import { Outlet, Navigate } from "react-router-dom";
import { PreviewProyecto } from "../../Components/Proyectos/PreviewProyecto";
import useProyecto from "../../hooks/useProyectos";
export const Proyectos = () => {
    const { proyectos } = useProyecto();
    console.log(proyectos, "proyectos");
    return (
        <>
            <h1 className="text-4xl font-black">Proyectos</h1>
            <div className="bg-white shadow my-10 rounded-lg ">
                {proyectos.length ? (
                    proyectos?.map((proyecto) => (
                        <PreviewProyecto
                            key={proyecto._id}
                            proyecto={proyecto}
                        />
                    ))
                ) : (
                    <p className="m-5 text-gray-600 uppercase text-center p-5">
                        No hay Proyectos Aun
                    </p>
                )}
            </div>
        </>
    );
};
