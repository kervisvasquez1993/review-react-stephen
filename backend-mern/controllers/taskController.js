import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const addTask = async (req, res) => {
    const { proyecto } = req.body;
    console.log("hola desde tarea")
    try {
        const existProject = await Project.findById(proyecto);
        if (existProject.creador.toString() !== req.user._id.toString()) {
            const error = new Error("no tiene permiso");
            return res.status(403).send({ error: error.message });
        }
        const taskSave = await Task.create(req.body);
        existProject.tareas.push(taskSave._id);
        await existProject.save();
        // console.log(existProject)
        res.status(200).json({ msj: taskSave });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
export const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id).populate("proyecto");
        const { creador } = task.proyecto;
        if (creador.toString() !== req.user._id.toString()) {
            const error = new Error("no tiene permiso");
            return res.status(403).send({ error: error.message });
        }
        return res.status(200).json({ msj: task });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
export const updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id).populate("proyecto");
        const { creador } = task.proyecto;
        if (creador.toString() !== req.user._id.toString()) {
            const error = new Error("no tiene permiso");
            return res.status(403).send({ error: error.message });
        }
        task.nombre = req.body.nombre || task.nombre;
        task.descripcion = req.body.descripcion || task.descripcion;
        task.prioridad = req.body.prioridad || task.prioridad;
        task.fechaEntrega = req.body.fechaEntrega || task.fechaEntrega;
        const tareaSave = await  task.save();
        return res.status(200).json({ msj: tareaSave });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
export const deletedTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id).populate("proyecto");
        const { creador } = task.proyecto;
        if (creador.toString() !== req.user._id.toString()) {
            const error = new Error("no tiene permiso");
            return res.status(403).send({ error: error.message });
        }
        await task.deleteOne();
        return res.status(200).json({msj : "se elimino correctamente"})
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
export const changeTask = async (req, res) => {};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjE4YzI3Mjk5OTFlYTJlMWFlZmZkYSIsImlhdCI6MTY3Njg1NjQ1MiwiZXhwIjoxNjc5NDQ4NDUyfQ.vrJ_PgO4SBbZ4UiuXeY7hf5cy-zzBlBW3L3zfFwS-fY
