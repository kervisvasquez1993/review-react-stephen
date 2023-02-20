import express from "express";
import {
    userRegisterController,
    autenticarController,
    conformarController,
    resertPasswordController,
    comprobarTokenController,
    newPasswordController,
} from "../controllers/userController.js";
const router = express.Router();

// Autenticacion, regitro y conformacion de usuario
router.post("/", userRegisterController);
router.post("/login", autenticarController);
router.post("/confirmar/:token", conformarController);
router.post("/resert-password", resertPasswordController);
// router.get("/olvidar-password/:token", comprobarTokenController);
// router.post("/olvidar-password/:token", newPasswordController);
router
    .route("/olvidar-password/:token")
    .get(comprobarTokenController)
    .post(newPasswordController);
export default router;
