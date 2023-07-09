const express = require("express");
const router = express.Router();

const {
  signupAdmin,
  loginAdmin,
  createCourse,
  updateCourse,
  getAllCourse,
  authenticateAdmin,
} = require("../Controllers/AdminController");

router.post("/signup", signupAdmin);

router.post("/login", loginAdmin);

router.post("/courses", authenticateAdmin, createCourse);

router.put("/courses/:courseId", authenticateAdmin, updateCourse);

router.get("/courses", authenticateAdmin, getAllCourse);

module.exports = router;
