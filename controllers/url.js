import shortid from "shortid";
import Url from "../models/url.js";

//POST : Create a short URL
async function createShortUrl (req, res)  {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  const shortId = shortid.generate();

  try {
    const newUrl = await Url.create({ shortId, originalUrl });
    res.status(201).json({ shortUrl: `http://localhost:5000/${shortId}` });
  } catch (err) {
    res.status(500).json({ error: "Server error while creating short URL" });
  }
};

// GET - Redirect to original URL
async function redirectToOriginalUrl  (req, res) {
  const { id } = req.params;

  try {
    const url = await Url.findOne({ shortId: id });

    if (!url) {
      return res.status(404).send("URL not found");
    }

    url.clicks++;

    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(500).json({ error: "Server error during redirection" });
  }
};

// GET  - Get click analytics
async function getAnalytics  (req, res)  {
  const { id } = req.params;

  try {
    const url = await Url.findOne({ shortId: id });

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.json({ totalClicks: url.clicks });
  } 
  catch (err) {
    res.status(500).json({ error: "Server error while fetching analytics" });
  }
};


export default {
   createShortUrl,
   redirectToOriginalUrl,
   getAnalytics 
};
