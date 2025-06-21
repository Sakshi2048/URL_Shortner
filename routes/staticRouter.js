import express from "express";
import URL from "../models/url.js"; 

const router = express.Router();

// Home page
router.get("/", async (req, res) => {
  const urls = await URL.find({});
  return res.render("home", { urls });
});

// About page 
router.get("/about", (req, res) => {
  res.render("about"); 
});

// Contact page 
router.get("/contact", (req, res) => {
  res.render("contact"); 
});

export default router;
