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

// Serve the index.html file for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
