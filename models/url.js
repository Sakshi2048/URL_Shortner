import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: { type: String, required: true, unique: true },
    originalUrl: { type: String, required: true },
    clicks: { type: Number, default: 0 },
});

const URL =  mongoose.model("Url", urlSchema);

export default URL;
