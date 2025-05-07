const Availability = require("../models/availability.model");

exports.addAvailability = async (req, res) => {
  const { date, startTime, endTime } = req.body;
  const inputDate = new Date(date);
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 7);

  if (inputDate < today || inputDate > maxDate) {
    return res
      .status(400)
      .json({ message: "Date must be within 7 days from today" });
  }

  const availability = new Availability({
    user: req.user._id,
    date: inputDate,
    startTime,
    endTime,
  });

  await availability.save();
  res.json({ message: "Availability added", availability });
};
