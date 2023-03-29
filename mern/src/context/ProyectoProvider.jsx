import { useEffect, useState, createContext } from "react";
import { ApiBackend } from "../apis/ApiBackend";
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
            const token = localStorage.getItem("token");
            if (!token) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                console.log("No tienes permiso");
                return;
            }
            // TODO: Configurar esta configuracion en api response backend
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await ApiBackend.post(
                "/projects",
                dataSubmit,
                config
            );
            console.log(data, "data");
            mostrarAlerta({ message: "Proyecto Creado", error: false });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getProjetcs = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    mostrarAlerta({
                        message: "No tienes permiso",
                        error: true,
                    });
                    console.log("No tienes permiso");
                    return;
                }
                // TODO: Configurar esta configuracion en api response backend
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

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
    return (
        <ProyectoContext.Provider
            value={{
                proyectos,
                loadingProject,
                mostrarAlerta,
                alerta,
                submitProyecto,
            }}
        >
            {children}
        </ProyectoContext.Provider>
    );
};
export default ProyectoContext;
