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
            default: Data.now(),
        },
        cliente: {
            tye: String,
            trim: true,
            required: true,
        },
        creader: {
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