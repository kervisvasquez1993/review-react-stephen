import express from "express";
import { userRegisterController, autenticarController } from "../controllers/userController.js";
const router = express.Router();

// Autenticacion, regitro y conformacion de usuario
router.post("/", userRegisterController);
router.post("/login", autenticarController);
export default router;
