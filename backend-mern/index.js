// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import connectarDB from "./config/db.js";
import userRouters from "./routes/userRouters.js";
import projectRouters from "./routes/projectRouters.js";
import taskRouters from "./routes/taskRouters.js";

const app = express();
app.use(express.json());
dotenv.config();
connectarDB();
// routing
app.use("/api/users", userRouters);
app.use("/api/projects", projectRouters);
app.use("/api/task", taskRouters);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("test");
    console.log("listening on port 4000");
});
