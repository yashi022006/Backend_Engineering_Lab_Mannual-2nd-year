const express = require("express");
const router = express.Router();

const generateurl = require("../controllers/urlcontroller");

router.post("/", generateurl);

module.exports = router;