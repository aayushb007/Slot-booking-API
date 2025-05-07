const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

/*
 * @route POST /api/auth/register
 * @desc Login user
 */
router.post("/login", authController.login);

module.exports = router;
