/*const express = require("express");
const path = require("path");
const router = express.Router();
let date = new Date();
let day = date.getDay();
let hours = date.getHours();
router.get("/*", (req, res,next) => {

  if (day < 6 && hours > 9 && hours < 17) {
    next();
  } else {

  res.sendFile(path.join(__dirname, "..", "public", "WorkingTime.html"));
}});
module.exports = router;*/
