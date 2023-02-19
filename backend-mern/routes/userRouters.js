import express from "express";
import {
    userRegisterController,
    autenticarController,
    conformarController
} from "../controllers/userController.js";
const router = express.Router();

// Autenticacion, regitro y conformacion de usuario
router.post("/", userRegisterController);
router.post("/login", autenticarController);
router.post("/confirmar/:token", conformarController);
export default router;
