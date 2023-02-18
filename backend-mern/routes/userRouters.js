import express from "express";
import { userRegisterController } from "../controllers/userController.js";
const router = express.Router();

// Autenticacion, regitro y conformacion de usuario
router.post("/", userRegisterController);
export default router;
