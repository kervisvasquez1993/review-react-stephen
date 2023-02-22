import express from "express";

import {
    addTask,
    getTask,
    updateTask,
    deletedTask,
    changeTask,
} from "../controllers/taskController.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();
router.post("/", checkAuth, addTask);

router
    .route("/:id")
    .get(checkAuth, getTask)
    .put(checkAuth, updateTask)
    .delete(checkAuth, deletedTask);

router.post("/state/:id", checkAuth, changeTask);

export default router;
