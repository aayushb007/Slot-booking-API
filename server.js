require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./app/routes/auth.routes");
const availabilityRoutes = require("./app/routes/availability.routes");
const slotRoutes = require("./app/routes/slot.routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
})();

app.use("/api/auth", authRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/slots", slotRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
