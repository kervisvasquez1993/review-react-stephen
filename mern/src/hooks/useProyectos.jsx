import { useContext } from "react";
import  ProyectoProvider  from "../context/ProyectoProvider";

const useProyecto = () => {
    return useContext(ProyectoProvider);
};
export default useProyecto;
