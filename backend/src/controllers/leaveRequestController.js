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

const { LeaveRequest, Employee } = require('../models');

exports.getAllLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.findAll({ include: Employee });
    res.json(leaveRequests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeaveRequestById = async (req, res) => {
  try {
    const leaveRequest = await LeaveRequest.findByPk(req.params.id, { include: Employee });
    if (leaveRequest) {
      res.json(leaveRequest);
    } else {
      res.status(404).json({ error: 'Leave request not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLeaveRequest = async (req, res) => {
  try {
    const { start_date, end_date, reason, EmployeeId } = req.body;
    const leaveRequest = await LeaveRequest.create({ start_date, end_date, reason, EmployeeId });
    res.status(201).json(leaveRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLeaveRequest = async (req, res) => {
  try {
    const leaveRequest = await LeaveRequest.findByPk(req.params.id);
    if (leaveRequest) {
      const { start_date, end_date, reason, status } = req.body;
      await leaveRequest.update({ start_date, end_date, reason, status });
      res.json(leaveRequest);
    } else {
      res.status(404).json({ error: 'Leave request not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLeaveRequest = async (req, res) => {
  try {
    const leaveRequest = await LeaveRequest.findByPk(req.params.id);
    if (leaveRequest) {
      await leaveRequest.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Leave request not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
