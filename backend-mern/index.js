// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import connectarDB from "./config/db.js";

const app = express();
dotenv.config()
connectarDB();
const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log("test");
    console.log("listening on port 4000");
});
