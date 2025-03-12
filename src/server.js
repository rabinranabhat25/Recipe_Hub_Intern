const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = "recipes.json";

// Get all recipes
app.get("/recipes", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });
    res.json(JSON.parse(data));
  });
});

// Add a new recipe
app.post("/recipes", (req, res) => {
  const newRecipe = req.body;

  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });

    const recipes = JSON.parse(data);
    newRecipe.id = recipes.length + 1; // Assign an ID
    recipes.push(newRecipe);

    fs.writeFile(FILE_PATH, JSON.stringify(recipes, null, 2), "utf8", (err) => {
      if (err) return res.status(500).json({ error: "Error writing file" });
      res.json({ message: "Recipe added successfully", recipe: newRecipe });
    });
  });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
