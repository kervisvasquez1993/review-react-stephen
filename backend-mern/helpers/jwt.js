import jwt from "jsonwebtoken";
export const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "30d",
    });
};
