const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongo = require("./db.js");
const collect = require("./models/User.js");
const select = require("./models/Selected.js");
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

  // Check if name is provided, if not return an error or a custom message
  if (!name) {
    return res.status(400).json({ error: "Name parameter is required." });
  }

  let query = {};

  // Perform a case-insensitive search on the Email field if name is provided
  if (name) {
    query = { Email: { $regex: name, $options: "i" } };
  }

  try {
    const users = await collect.find(query);
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    console.log(users); // Query MongoDB
    res.json(users); // Return the users as JSON response
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});


app.get("/getResult", async (req, res) => {
  const { name } = req.query; // Extract name from query parameters

  // If a name is provided, perform a case-insensitive search on the Name field
  if (name) {
    query = { Email: { $regex: name, $options: "i" } };
  }

  try {
    const users = await select.findOne({ Email: name });
    console.log(users);
    if (users) {
      console.log(users);
      const response = {
        match: "true",
      };
      res.json(response);
    } else {
      const response = {
        match: "false",
      };
      res.json(response);
    } // Query MongoDB
    // Return the users as JSON response
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
