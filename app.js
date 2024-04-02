const express = require("express");
const path = require("path"); // Import the path module
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Importing the data to mock an API.
const jsonData = require("./public/data/data.json");

// Add a GET route to send the JSON data.
app.get("/api/data", (req, res) => {
  res.json(jsonData);
});

app.get("/page1", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "page1.html"));
});
app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "page2.html"));
});
app.get("/page3", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "page3.html"));
});

// Serve the index.html file for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
