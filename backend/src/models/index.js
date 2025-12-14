// Copyright 2025 Shrikara Kaudambady
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
