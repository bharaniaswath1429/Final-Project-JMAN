const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questions: {
    type: DataTypes.JSONB, 
    allowNull: false,
  }
});

module.exports = Course;
