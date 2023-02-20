import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            trim: true,
            required: true,
        },
        descripcion: {
            type: String,
            trim: true,
            required: true,
        },
        fechaEntrega: {
            type: Date,
            default: Date.now(),
        },
        cliente: {
            tye: String,
            trim: true,
            required: true,
        },
        creador: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        colaborador: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;