import { useEffect, useState, createContext } from "react";
import { ApiBackend } from "../apis/ApiBackend";
import { configHeaderToken } from "../helpers/";
const ProyectoContext = createContext();

export const ProyectoProvider = ({ children }) => {
    const [proyectos, setProyectos] = useState([]);
    const [proyecto, setProyecto] = useState({});
    const [alerta, setAlerta] = useState({});
    const [loadingProject, setLoadingProject] = useState(false);
    const mostrarAlerta = (alerta) => {
        setAlerta(alerta);
    };
    const config = configHeaderToken();

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
            setLoadingProject(true);
            try {
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
            } finally {
                setLoadingProject(false);
            }
        };
        getProjetcs();
    }, []);

    setTimeout(() => {
        setAlerta({});
    }, 5000);
    const getProject = async (id) => {
        setLoadingProject(true);
        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }
            const { data } = await ApiBackend.get(`/projects/${id}`, config);
            // setProyecto(data.project);
            setProyecto(data);
            return;
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingProject(false);
        }
    };
    return (
        <ProyectoContext.Provider
            value={{
                proyectos,
                proyecto,
                loadingProject,
                mostrarAlerta,
                alerta,
                submitProyecto,
                getProject,
                loadingProject
            }}
        >
            {children}
        </ProyectoContext.Provider>
    );
};
export default ProyectoContext;
