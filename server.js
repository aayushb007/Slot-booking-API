require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./app/routes/auth.routes");
const availabilityRoutes = require("./app/routes/availability.routes");
const slotRoutes = require("./app/routes/slot.routes");
const { connectDB } = require("./app/config/db.config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()

app.use("/api/auth", authRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/slots", slotRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
