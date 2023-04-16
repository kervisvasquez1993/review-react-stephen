import { useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiBackend } from "../apis/ApiBackend";
import { configHeaderToken } from "../helpers/";
const ProyectoContext = createContext();

export const ProyectoProvider = ({ children }) => {
    const navigate = useNavigate();
    const [proyectos, setProyectos] = useState([]);
    const [proyecto, setProyecto] = useState({});
    const [alerta, setAlerta] = useState({});
    const [loadingProject, setLoadingProject] = useState(false);
    const [formModalProyecto, setFormModalProyecto] = useState(false);
    const mostrarAlerta = (alerta) => {
        setAlerta(alerta);
    };
    const handleFormProyecto = () => {
        return setFormModalProyecto(!formModalProyecto);
    };
    const config = configHeaderToken();

    const submitProyecto = async (proyecto) => {
        const { id } = proyecto;
        if (id) {
            await editProyecto(proyecto);
        } else {
            await newProject(proyecto);
        }

        return;
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
    }, [proyecto]);
    const deletedProject = async (id) => {
        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }
            await ApiBackend.delete(`/projects/${id}`, config);
            const proyectosActualizados = proyectos.filter(
                (proyectoState) => proyectoState._id !== id
            );
            setProyectos(proyectosActualizados);
            mostrarAlerta({ message: "Proyecto Eliminado", error: false });
            // <n to="/proyectos"/>;
            navigate("/proyectos");
        } catch (error) {
            console.log(error);
        }
    };
    setTimeout(() => {
        setAlerta({});
    }, 5000);
    const bodySubmit = (proyecto) => {
        const { nameProject, descriptionProject, dateEntregaProject, client } =
            proyecto;
        const dataSubmit = {
            nombre: nameProject,
            descripcion: descriptionProject,
            fechaEntrega: dateEntregaProject,
            cliente: client,
        };
        return dataSubmit;
    };
    const editProyecto = async (proyecto) => {
        const { id } = proyecto;
        const dataSubmit = bodySubmit(proyecto);
        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }

            const { data } = await ApiBackend.put(
                `/projects/${id}`,
                dataSubmit,
                config
            );
            // sincronizar el state
            const proyectosActualizados = proyectos.map((proyectoState) => {
                if (proyectoState._id === data._id) {
                    setProyecto(data);
                    return data;
                } else {
                    return proyectoState;
                }
            });
            setProyectos(proyectosActualizados);
            // navigate('/proyectos')
            mostrarAlerta({ message: "Proyecto Editado", error: false });
        } catch (error) {
            console.log(error);
        }
    };

    const newProject = async (proyecto) => {
        console.log("creando proyecto");
        const dataSubmit = bodySubmit(proyecto);
        console.log(dataSubmit, "dataSubmit desde formulario");
        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }

            await ApiBackend.post("/projects", dataSubmit, config);
            mostrarAlerta({ message: "Proyecto Creado", error: false });
        } catch (error) {
            console.log(error);
        }
    };
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
    // TAREAS :
    const submitTarea = async (tarea) => {
        console.log(tarea.proyecto);
        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }
            const { data } = await ApiBackend.post(
                "task",
                tarea,
                config
            );
            console.log(data);
        } catch (error) {
            console.log(error);
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
                loadingProject,
                deletedProject,
                handleFormProyecto,
                formModalProyecto,
                submitTarea,
            }}
        >
            {children}
        </ProyectoContext.Provider>
    );
};
export default ProyectoContext;
