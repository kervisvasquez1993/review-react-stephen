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
        const userSave = await user.save();
        res.json(userSave);
    } catch (error) {
        res.json({ error: error.errors });
    }
};
