
const sequelize = require('../config/database');
const Employee = require('./employee');
const Policy = require('./policy');
const LeaveRequest = require('./leaveRequest');

Employee.hasMany(LeaveRequest);
LeaveRequest.belongsTo(Employee);

const db = {
  sequelize,
  Employee,
  Policy,
  LeaveRequest
};

module.exports = db;
