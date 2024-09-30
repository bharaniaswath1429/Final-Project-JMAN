const express = require('express');
const { createCourse, getCourses } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/courses', authMiddleware, createCourse);
router.get('/courses', authMiddleware, getCourses);

module.exports = router;
