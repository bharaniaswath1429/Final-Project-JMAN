const { Course } = require('../models');

const createCourse = async (req, res) => {
  const { title, duration, designation, questions } = req.body;
  console.log(title, duration, designation, questions)
  try {
    const course = await Course.create({ title, duration, designation, questions });
    return res.status(201).json({ message: 'Course created', course });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create course' });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

module.exports = { createCourse, getCourses };
