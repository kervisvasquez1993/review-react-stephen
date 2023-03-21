// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import connectarDB from "./config/db.js";
import userRouters from "./routes/userRouters.js";
import projectRouters from "./routes/projectRouters.js";
import taskRouters from "./routes/taskRouters.js";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();

connectarDB();
// config cors
const whiteLists = ["http://localhost:3000", "http://localhost:5173", "http://localhost:4000", "127.0.0.1:4000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteLists.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Error de Cors"));
        }
    },
};
app.use(cors(corsOptions));
// routing
app.use("/api/users", userRouters);
app.use("/api/projects", projectRouters);
app.use("/api/task", taskRouters);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("test");
    console.log("listening on port 3000");
    console.log(PORT)
    
    
});
