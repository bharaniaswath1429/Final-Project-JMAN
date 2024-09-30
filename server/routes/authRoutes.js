// const express = require('express');
// const { signup, login } = require('../controllers/authController');
// const router = express.Router();

// router.post('/signup', signup);
// router.post('/login', login);

// module.exports = router;

const express = require('express');
const { signup, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/admin', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to the Admin Dashboard!'});
});

router.get('/employee', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to the Employee Dashboard!' });
});

router.get('/manager', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to the Manager Dashboard!' });
});

module.exports = router;
