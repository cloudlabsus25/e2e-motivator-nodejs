const mongoose = require("mongoose");
const winston = require("winston");

// Setup Winston Logger
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("MongoDB connected")) // ✅ Replaces console.log
  .catch((err) => logger.error("MongoDB connection error:", err)); // ✅ Replaces console.log

module.exports = mongoose;

