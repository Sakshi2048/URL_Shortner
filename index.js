import express from "express";
import mongoose from "mongoose";
import urlRoutes from "./routes/url.js";
import staticRouter from "./routes/staticRouter.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();
const PORT = 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form submissions

app.set("view engine","ejs");
app.set("views","./views")

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/url", urlRoutes);       // For API routes
app.use("/", staticRouter);


app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
