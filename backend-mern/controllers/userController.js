import { generateJWT, generateId } from "../helpers/index.js";
import User from "../models/User.js";

export const userRegisterController = async (req, res) => {
    // evitar email duplicado
    const { email } = req.body;
    const validateEmail = await User.findOne({ email });
    if (validateEmail) {
        const error = new Error(`El usuario con el email ${email}`);
        return res.status(400).json({ msj: error.message });
    }
    try {
        const user = new User(req.body);
        user.token = generateId();
        const userSave = await user.save();
        res.json(userSave);
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
    if (await !user.comprobarPassword(passwords)) {
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

export const conformarController = async (req, res) => {
    const token = req.params.token;
    // console.log(token);
    const userConfirmar = await User.findOne({ token });
    console.log(userConfirmar);
    if (!userConfirmar) {
        const error = new Error("Token no valido");
        return res.status(400).json({ error: error.message });
    }
    res.json({ msj: "ok!" });
    try {
        userConfirmar.confirmado = true;
        userConfirmar.token = "";
        userConfirmar.save();
        res.json({ msj: "User confirmado de forma correcta" });
    } catch (error) {
        res.status(400).json({ error });
    }
};
