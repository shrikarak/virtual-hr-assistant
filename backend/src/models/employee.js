
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  department: {
    type: DataTypes.STRING
  },
  position: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.ENUM('admin', 'employee'),
    defaultValue: 'employee'
  }
});

module.exports = Employee;
