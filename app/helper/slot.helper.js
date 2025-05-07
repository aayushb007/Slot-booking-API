function getTimeSlots(start, end) {
  const slots = [];
  let [h, m] = start.split(":").map(Number);
  let [eh, em] = end.split(":").map(Number);

  let startMinutes = h * 60 + m;
  let endMinutes = eh * 60 + em;

  while (startMinutes + 30 <= endMinutes) {
    let slotStart = startMinutes;
    let slotEnd = startMinutes + 30;
    slots.push({
      startTime: `${String(Math.floor(slotStart / 60)).padStart(
        2,
        "0"
      )}:${String(slotStart % 60).padStart(2, "0")}`,
      endTime: `${String(Math.floor(slotEnd / 60)).padStart(2, "0")}:${String(
        slotEnd % 60
      ).padStart(2, "0")}`,
    });
    startMinutes += 30;
  }
  return slots;
}
module.exports = { getTimeSlots };
