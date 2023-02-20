import Project from "../models/Project.js";
export const getProjectsController = (req, res) => {
    console.log("gola");
};
export const getProjectController = (req, res) => {
    console.log("gola");
};
export const newProjectsController = async (req, res) => {
    const project = new Project(req.body);
    project.creador = req.user._id;
    try {
        const projectSave = await project.save();
        res.json(projectSave);
    } catch (error) {
        console.error("error");
    }
};
export const editProjectsController = (req, res) => {
    console.log("gola");
};
export const deletedProjectsController = (req, res) => {
    console.log("gola");
};
export const addUserProjectsController = (req, res) => {
    console.log("gola");
};
export const deletedUserProjectsController = (req, res) => {
    console.log("gola");
};
export const getTaskProjectsController = (req, res) => {
    console.log("gola");
};
