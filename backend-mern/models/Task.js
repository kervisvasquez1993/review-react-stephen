import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
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
        estado: {
            type: Boolean,
            default: false,
        },
        fechaEntrega: {
            type: Date,
            required: true,
            default: Date.now(),
        },

        prioridad: {
            type: String,
            required: true,
            enum: ["Baja", "Media", "Altar"],
        },
        proyecto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
