const { body } = require("express-validator");
const express = require("express");
const { validationSchema } = require("../middlewares/validationSchema");

const {
  getAllCourse,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses.controller");
const router = express.Router();

router.route("/").get(getAllCourse).post(validationSchema(), createCourse);

router
  .route("/:courseId")
  .get(getSingleCourse)
  .patch(updateCourse)
  .delete(deleteCourse);

module.exports = router;
