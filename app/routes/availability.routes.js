const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const availabilityController = require("../controllers/availability.controller");

router.post("/", auth, role(["user"]), availabilityController.addAvailability);

module.exports = router;
