const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/loginSystem", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
