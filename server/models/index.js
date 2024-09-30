const sequelize = require('../config/dbConfig');
const User = require('./user');
const Course = require('./course')

sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log("Error syncing database", err);
  });

module.exports = {
  User,
  Course
};