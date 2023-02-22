import Project from "../models/Project.js";
import Task from "../models/Task.js";
export const getProjectsController = async (req, res) => {
    try {
        const projects = await Project.find().where("creador").equals(req.user);
        return res.json({ projects });
    } catch (error) {
        console.error(error);
    }
};
export const getProjectController = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id);
        if (!project) {
            const error = new Error("id no encontrado");
            return res.status(404).json({ error: error.message });
        }

        if (project.creador._id.toString() !== req.user.id.toString()) {
            res.status(401).json({
                error: "no tiene permiso para acceder a este project",
            });
        }
        return res.json(project);
    } catch (err) {
        res.status(404).json(err);
    }
};
export const newProjectsController = async (req, res) => {
    const project = new Project(req.body);
    console.log(req.user, "user");
    project.creador = req.user._id;
    try {
        const projectSave = await project.save();
        res.json(projectSave);
    } catch (error) {
        console.error("error");
    }
};
export const editProjectsController = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id);
        if (!project) {
            const error = new Error("id no encontrado");
            return res.status(404).json({ error: error.message });
        }

        if (project.creador._id.toString() !== req.user.id.toString()) {
            res.status(401).json({
                error: "no tiene permiso para acceder a este project",
            });
        }
        project.nombre = req.body.nombre || project.nombre;
        project.descripcion = req.body.descripcion || project.descripcion;
        project.fechaEntrega = req.body.fechaEntrega || project.fechaEntrega;
        project.cliente = req.body.cliente || project.cliente;
        const projectSave = await project.save();
        res.json(projectSave);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};
export const deletedProjectsController = async (req, res) => {
    const { id } = req.params;

    const project = await Project.findById(id);
    if (!project) {
        const error = new Error("id no encontrado");
        return res.status(404).json({ error: error.message });
    }

    if (project.creador._id.toString() !== req.user.id.toString()) {
        res.status(401).json({
            error: "no tiene permiso para acceder a este project",
        });
    }
    try {
        await project.deleteOne();
        return res.status(200).json({ msg: "deleting project" });
        return res.status(200).json({ eliminado: "eliminado" });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};
export const addUserProjectsController = (req, res) => {
    console.log("gola");
};
export const deletedUserProjectsController = (req, res) => {
    console.log("gola");
};
export const getTaskProjectsController = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id);
        // solo el que crea el projecto o colaborador
        const tasks = await Task.find().where("proyecto").equals(id);
        return res.status(200).json({ msj: { tasks, project } });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
