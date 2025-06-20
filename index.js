import express from "express";
import mongoose from "mongoose";
import urlRoutes from "./routes/url.js";

const app = express();
const PORT = 5000;
const MONGO_URL = "mongodb://127.0.0.1:27017/urlShortener";

app.use(express.json());

mongoose.connect(MONGO_URL)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/", urlRoutes);

app.get("/",(req,res)=>{
    res.send("Home Page");
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
