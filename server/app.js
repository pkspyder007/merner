// Require all dependencies
const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const { success, error } = require("./utils/utils");
// Dependencies end

// Import routes
const indexRoutes = require("./routes/index");
// End Import routes

// Create an express app
const app = express();

// Initiate all required middlewares
app.use(cors());
app.use(express.json());
// Setting the build folder as static for serving in production
app.use(express.static(path.join(__dirname, "../", "build")));
// End middlewares

// Add all the router files
app.use("/api/", indexRoutes);
// END router files

// Setup MongoDB
const MONGO_URI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI_DEV;
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// Connect to MongoDB
mongoose
  .connect(MONGO_URI, MONGO_CONFIG)
  .then(() => success("Connected to Database..."))
  .catch((err) => error(err));

// Start the express app
const { API_PORT } = process.env;
app.listen(API_PORT || 4000, () => {
  success(`Server started on port ${API_PORT || 4000} ...`);
});

// Production Deployment Requirements
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "build", "index.html"));
  });
}
