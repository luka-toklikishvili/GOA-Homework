import express from "express";
import { connectDB } from "./db.js";
import { config } from "dotenv";

const app = express();

config()
connectDB();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
