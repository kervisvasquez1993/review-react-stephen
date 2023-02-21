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
            req.user = await User.findById(decoded.id).select(
                "-passwords -token -confirmado -__v"
            );
            console.log("desde middleware");
            return next();
        } catch (error) {
            console.log(error);
            return res.status(404).json({ error: error });
        }
    }
    if (!token) {
        const error = new Error("TOKEN NO VALIDO!");
        return res.json({ error: error.message });
    }
    next();
};
