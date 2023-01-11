const express = require("express");
const router = express.Router();
const path = require("path");

const authMiddleware = (req, res, next) => {
  const date = new Date();
  [1, 2, 3, 4, 5].includes(date.getDay()) &&
  date.getHours() >= 9 &&
  date.getHours() < 17
    ? next()
    : res.render("error_view");
};
router.get("/", authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, "../", "Home.html"));
});
router.get("/ContactUs", authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, "../", "ContactUs.html"));
});
router.get("/OurServices", authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, "../", "OurServices.html"));
});
module.exports = router;
