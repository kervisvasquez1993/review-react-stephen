import { useEffect, useState, createContext } from "react";
import { ApiBackend } from "../apis/ApiBackend";
import { configHeaderToken } from "../helpers/";
const ProyectoContext = createContext();

export const ProyectoProvider = ({ children }) => {
    const [proyectos, setProyectos] = useState([]);
    const [alerta, setAlerta] = useState({});
    const [loadingProject, setLoadingProject] = useState(true);
    const mostrarAlerta = (alerta) => {
        setAlerta(alerta);
    };

    const submitProyecto = async (proyecto) => {
        // console.log(proyecto);
        const { nameProject, descriptionProject, dateEntregaProject, client } =
            proyecto;
        const dataSubmit = {
            nombre: nameProject,
            descripcion: descriptionProject,
            fechaEntrega: dateEntregaProject,
            cliente: client,
        };
        try {
            const config = configHeaderToken();
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }

            const { data } = await ApiBackend.post(
                "/projects",
                dataSubmit,
                config
            );
            mostrarAlerta({ message: "Proyecto Creado", error: false });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getProjetcs = async () => {
            try {
                const config = configHeaderToken();
                if (!config) {
                    mostrarAlerta({
                        message: "No tienes permiso",
                        error: true,
                    });
                    return;
                }
                const { data } = await ApiBackend.get("/projects", config);
                setProyectos(data.projects);
                setLoadingProject(false);
            } catch (error) {
                console.log(error);
                setLoadingProject(false);
            }
        };
        getProjetcs();
    }, []);

    setTimeout(() => {
        setAlerta({});
    }, 5000);
    const getProject = async (id) => {
        try {
            console.log(id, "id");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <ProyectoContext.Provider
            value={{
                proyectos,
                loadingProject,
                mostrarAlerta,
                alerta,
                submitProyecto,
                getProject,
            }}
        >
            {children}
        </ProyectoContext.Provider>
    );
};
export default ProyectoContext;
