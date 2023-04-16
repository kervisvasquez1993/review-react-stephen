import React from "react";
import { Tarea } from "./Tarea";
export const ListTareas = ({ tareas }) => {
    return (
        <div>
            {tareas?.map((tarea) => (
                <Tarea key={tarea._id} tarea={tarea} />
            ))}
        </div>
    );
};
