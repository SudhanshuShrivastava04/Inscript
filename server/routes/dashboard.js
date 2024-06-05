const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/check-auth.js");
const controller = require("../controllers/dashboard-controller.js");

router.get("/dashboard", isLoggedIn, controller.dashboard);

module.exports = router;
