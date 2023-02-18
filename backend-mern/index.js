// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import connectarDB from "./config/db.js";

const app = express();
dotenv.config()
connectarDB();

app.listen(4000, () => {
    console.log("test");
    console.log("listening on port 4000");
});
