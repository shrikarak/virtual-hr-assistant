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

const express = require('express');
const router = express.Router();
const leaveRequestController = require('../controllers/leaveRequestController');

router.get('/', leaveRequestController.getAllLeaveRequests);
router.get('/:id', leaveRequestController.getLeaveRequestById);
router.post('/', leaveRequestController.createLeaveRequest);
router.put('/:id', leaveRequestController.updateLeaveRequest);
router.delete('/:id', leaveRequestController.deleteLeaveRequest);

module.exports = router;
