require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./config/db"); // Removed unused `mongoose` import

const app = express();
app.use(express.json());
app.use(cors());

const motivatorRoutes = require("./routes/motivatorRoutes");
app.use("/api/motivators", motivatorRoutes);

const PORT = process.env.PORT || 5000;

// Replace console.log with a proper logger or disable ESLint warning
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
});

app.get("/", (req, res) => {
  res.send("Motivator App Backend is running!");
});

