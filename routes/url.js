import express from "express";
import {
  createShortUrl,
  redirectToOriginalUrl,
  getAnalytics,
} from "../controllers/url.js";

const router = express.Router();

router.post("/", createShortUrl);
router.get("/:id", redirectToOriginalUrl);
router.get("/analytics/:id", getAnalytics);

export default router;
