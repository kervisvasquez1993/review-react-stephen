import { useEffect, useState, createContext } from "react";
 const ProyectoContext = createContext();
export const ProyectoProvider = ({ children }) => {
    const [proyectos, setProyectos] = useState([]);
    return (
        <ProyectoContext.Provider value={{proyectos, setProyectos}}>
            {children}
        </ProyectoContext.Provider>
    );
};
export default ProyectoContext