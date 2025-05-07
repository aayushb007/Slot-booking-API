const Availability = require("../models/availability.model");
const Slot = require("../models/slot.model");
const mongoose = require("mongoose");
const { getTimeSlots } = require("./../helper/slot.helper");
exports.getSlots = async (req, res) => {
  const { date } = req.query;
  const availabilities = await Availability.find({
    date: new Date(date),
  }).populate("user");
  let slots = [];

  for (const avail of availabilities) {
    let userSlots = getTimeSlots(avail.startTime, avail.endTime);

    userSlots = userSlots.filter((slot) => {
      const [sh, sm] = slot.startTime.split(":").map(Number);
      const [eh, em] = slot.endTime.split(":").map(Number);
      return eh * 60 + em - (sh * 60 + sm) === 30;
    });

    const bookedSlots = await Slot.find({
      user: avail.user._id,
      date: avail.date,
      booked: true,
    });
    const bookedTimes = bookedSlots.map((s) => s.startTime);

    userSlots = userSlots.filter((slot, idx, arr) => {
      const isBooked = bookedTimes.includes(slot.startTime);
      const prev = arr[idx - 1]?.startTime;
      const next = arr[idx + 1]?.startTime;
      return (
        !isBooked && !bookedTimes.includes(prev) && !bookedTimes.includes(next)
      );
    });

    slots.push({ user: avail.user.username, slots: userSlots });
  }

  res.json(slots);
};

exports.bookSlot = async (req, res) => {
  const { userId, date, startTime } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid userId" });
  }

  const userObjectId = new mongoose.Types.ObjectId(userId);
  const avail = await Availability.findOne({
    user: userObjectId,
    date: new Date(date),
  });
  if (!avail)
    return res.status(404).json({ message: "Availability not found" });

  const slot = await Slot.findOne({
    user: userId,
    date: new Date(date),
    startTime,
  });
  if (slot && slot.booked)
    return res.status(400).json({ message: "Slot already booked" });

  await Slot.updateOne(
    { user: userId, date: new Date(date), startTime },
    { $set: { booked: true } },
    { upsert: true }
  );
  res.json({ message: "Slot booked" });
};
