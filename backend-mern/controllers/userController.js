import {
    generateJWT,
    generateId,
    emailRegister,
    resetPassword,
} from "../helpers/index.js";
import User from "../models/User.js";

export const userRegisterController = async (req, res) => {
    // evitar email duplicado
    const { email } = req.body;
    const validateEmail = await User.findOne({ email });
    if (validateEmail) {
        const error = new Error(
            `El usuario con el email ${email} ya esta registrado`
        );
        return res.status(400).json({ msj: error.message });
    }
    try {
        const user = new User(req.body);
        user.token = generateId();

        const userSave = await user.save();
        // enviar el email de confirmacion
        emailRegister({
            email: userSave.email,
            nombre: userSave.nombre,
            token: userSave.token,
        });
        res.status(200).json({ msj: "Usuario Creado Correctamente" });
    } catch (error) {
        res.json({ error: error.errors });
    }
};

export const autenticarController = async (req, res) => {
    const { email, passwords } = req.body;
    // comporvar si el usuraio existe
    const user = await User.findOne({ email });

    if (!user) {
        const error = new Error("El Usuario no existe");
        return res.status(404).json({ error: error.message });
    }

    // comprovar que el usuario este conformado
    if (!user.confirmado) {
        const error = new Error("Tu cuenta no ha sido conformada");
        return res.status(403).json({ error: error.message });
    }
    // comprobar password
    if ( !(await user.comprobarPassword(passwords))) {
        const error = new Error("Tu Conraseña es incorrecta");
        return res.status(403).json({ error: error.message });
    }
    res.json({
        _id: user._id,
        nombre: user.nombre,
        email: user.email,
        token: generateJWT(user._id),
    });
};

export const confirmarController = async (req, res) => {
    const token = req.params.token;
    console.log("hola desde controller");
    const userConfirmar = await User.findOne({ token });
    console.log(userConfirmar);
    if (!userConfirmar) {
        const error = new Error("Token no valido");
        return res.status(400).json({ error: error.message });
    }
    try {
        userConfirmar.confirmado = true;
        userConfirmar.token = "";
        userConfirmar.save();
        res.json({ msj: `User confirmado de forma correcta` });
    } catch (error) {
        console.log("error update ");
        res.status(400).json({ error });
    }
};

export const resertPasswordController = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error(`El usuario con el email ${email} no existe`);
        return res.status(400).json({ msj: error.message });
    }
    try {
        user.token = generateId();
        await user.save();
        resetPassword({
            email: user.email,
            nombre: user.nombre,
            token: user.token,
        });

        res.json({ msj: "Se envio un correo a su email" });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
};

export const comprobarTokenController = async (req, res) => {
    const token = req.params.token;
    const validatetoken = await User.findOne({ token });
    if (!validatetoken) {
        const error = new Error("Token no valido");
        // console.log(error);
        return res.status(404).json({ msj: "Token no valido" });
    }

    res.json({ msj: "Token valido y el usuario existe" });
};

export const newPasswordController = async (req, res) => {
    const { token } = req.params;
    const { passwords } = req.body;
    const usuario = await User.findOne({ token });
    if (!usuario) {
        const error = new Error(`Token no valido`);
        return res.status(404).json({ msj: error });
    }
    try {
        usuario.passwords = passwords;
        usuario.token = "";
        await usuario.save();
        res.json({ msj: "Password cambiada de forma satisfactoria" });
    } catch (error) {
        res.status(400).json({ error });
    }
};

export const profileUserController = async (req, res) => {
    const perfil = req.user;
    res.json({ msj: perfil });
};
