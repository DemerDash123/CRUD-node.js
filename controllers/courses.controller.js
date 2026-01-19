let { courses } = require("../data/courses");
const { validationResult } = require("express-validator");

const getAllCourse = (req, res) => {
  res.json(courses);
};
const getSingleCourse = (req, res) => {
  const courseId = Number(req.params.courseId);
  let course = courses.find((course) => course.id === courseId);
  if (!course) {
    res.status(404).json({
      error: "the object is not found",
    });
  }

  res.status(200).json(course);
};

const createCourse = (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  const newCourse = {
    id: courses.length + 1,
    ...req.body,
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
};

const updateCourse = (req, res) => {
  const courseId = +req.params.courseId;
  let course = courses.find((course) => course.id === courseId);

  if (!course) {
    res.status(404).json({
      error: "the object is not found",
    });
  }
  course = { ...course, ...req.body };

  res.status(200).json(course);
};

const deleteCourse = (req, res) => {
  const courseId = +req.params.courseId;
  let course = courses.find((course) => course.id === courseId);

  if (!course) {
    res.status(404).json({
      error: "the object is not found",
    });
  }
  courses = courses.filter((course) => course.id !== courseId);

  res.send(courses);
};

module.exports = {
  getAllCourse,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
