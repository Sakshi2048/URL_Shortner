import express from "express";
import controller from "../controllers/url.js";

const router = express.Router();

router.post("/", controller.createShortUrl);
router.get("/:id", controller.redirectToOriginalUrl);
router.get("/analytics/:id", controller.getAnalytics);
export default router;
