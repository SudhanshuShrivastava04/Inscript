const express = require("express");
const router = express.Router();

const controller = require("../controllers/main-controller.js");

router.get("/", controller.homepage);
router.get("/about", controller.about);

module.exports = router;
