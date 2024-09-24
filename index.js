const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongo = require("./db.js");
const collect = require("./models/User.js");
const app = express();
const PORT = process.env.PORT || 4300;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: `${process.env.CORS}` })); // Enable CORS for localhost:3000
mongo();

app.use(express.json());

// Get user data (with optional search by name)
app.get("/getUserData", async (req, res) => {
  const { name } = req.query; // Extract name from query parameters
  
  let query = {};
  
  // If a name is provided, perform a case-insensitive search on the Name field
  if (name) {
    query = { Name: { $regex: name, $options: "i" } };
  }

  try {
    const users = await collect.find(query); // Query MongoDB
    res.json(users); // Return the users as JSON response
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

// Test route for base path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
