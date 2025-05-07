const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const slotController = require("../controllers/slot.controller");

router.get("/", auth, role(["admin"]), slotController.getSlots);
router.post("/book", auth, role(["admin"]), slotController.bookSlot);

module.exports = router;
