# 🔗 URL Shortener

A simple Node.js + Express.js based URL Shortener web app with EJS templating and MongoDB as the database.

---


## 📁 Project Structure

```
URL Shortner/
│
├── controllers/         # Controller functions (create, redirect, analytics)
│   └── url.js
│
├── models/              # Mongoose schema for URLs
│   └── url.js
│
├── routes/              # API & Static page routes
│   ├── url.js
│   └── staticRouter.js
│
├── views/               # EJS Templates
│   ├── home.ejs
│   ├── about.ejs
│   └── contact.ejs
│
├── .env                 # MongoDB connection URL
├── .gitignore
├── index.js             # Main server file
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Templating:** EJS
- **Styling:** Tailwind CSS (CDN)
- **Environment Variables:** dotenv

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Sakshi2048/URL_Shortner.git
cd URL_Shortner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URL=mongodb://127.0.0.1:27017/urlShortener
```

Or use your MongoDB Atlas URI if hosted remotely.

### 4. Run the App

```bash
nodemon index.js
```

The app should now be running on:

```
http://localhost:5000
```

---

## 📌 Features

- ✅ Shorten URLs from the UI
- ✅ Redirect shortened URLs to original
- ✅ View all stored short links
- ✅ Responsive UI using TailwindCSS

---

## 📮 Example Postman Request

**POST** `http://localhost:5000/url`

```json
{
  "originalUrl": "https://www.google.com"
}
```

---

