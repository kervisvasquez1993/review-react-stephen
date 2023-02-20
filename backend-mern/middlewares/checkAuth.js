import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const checkAuth = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            // console.log(token);
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.usuario = await User.findById(decoded.id);
            console.log(req.usuario);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ error: error });
        }
    }
    next();
};
