import express from "express";
import {
    userRegisterController,
    autenticarController,
    confirmarController,
    resertPasswordController,
    comprobarTokenController,
    newPasswordController,
    profileUserController,
} from "../controllers/userController.js";
import { checkAuth } from "../middlewares/checkAuth.js";
const router = express.Router();
// Autenticacion, regitro y conformacion de usuario
router.post("/", userRegisterController);
router.post("/login", autenticarController);
router.get("/confirmar/:token", confirmarController);
router.post("/resert-password", resertPasswordController);
router.get("/perfil", checkAuth, profileUserController);
// router.get("/olvidar-password/:token", comprobarTokenController);
// router.post("/olvidar-password/:token", newPasswordController);
router
    .route("/olvidar-password/:token")
    .get(comprobarTokenController)
    .post(newPasswordController);
export default router;
