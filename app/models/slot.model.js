const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  booked: {
    type: Boolean,
    default: false,
  },
});

const Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;
