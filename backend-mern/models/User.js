import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    passwords: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false,
    },
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("passwords")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.passwords = await bcrypt.hash(this.passwords, salt);
});
const User = mongoose.model("User", UserSchema);
export default User;
