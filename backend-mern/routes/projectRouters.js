import express from "express";
import {
    getProjectsController,
    getProjectController,
    newProjectsController,
    editProjectsController,
    deletedProjectsController,
    addUserProjectsController,
    deletedUserProjectsController,
    getTaskProjectsController,
} from "../controllers/projectController.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();

router
    .route("/")
    .get(checkAuth, getProjectsController)
    .post(checkAuth, newProjectsController);
router
    .route("/:id")
    .get(checkAuth, getProjectController)
    .put(checkAuth, editProjectsController)
    .delete(checkAuth, deletedProjectsController);

router.get("/:id/tasks", checkAuth, getTaskProjectsController);

router.post("/add-colaborador/:id", checkAuth, addUserProjectsController);
router.post(
    "/delete-colaborador/:id",
    checkAuth,
    deletedUserProjectsController
);

export default router;
