import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormularioProyecto } from "../../Components/FormularioProyecto";
import useProyecto from "../../hooks/useProyectos";
export const EditProject = () => {
    const { proyecto, getProject, loadingProject } = useProyecto();
    const params = useParams();
    useEffect(() => {
        getProject(params.id);
        console.log("hola");
    }, []);
    if (loadingProject) return <div>loading...</div>;
    return (
        <>
            <h1 className="font-black text-4xl">
                Editando proyecto {proyecto.nombre}
            </h1>

            <FormularioProyecto />
        </>
    );
};
