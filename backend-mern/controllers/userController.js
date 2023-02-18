import User from "../models/User.js";
export const userRegisterController = async (req, res) => {
    try {
        const user = new User(req.body);
        const userSave = await user.save();
        res.json(userSave);
    } catch (error) {
        res.json({ error: error.errors });
    }
};
