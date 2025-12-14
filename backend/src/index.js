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
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const auth = require('./middleware/auth');
const policyRoutes = require('./routes/policyRoutes');
const leaveRequestRoutes = require('./routes/leaveRequestRoutes');

app.use('/api/policies', policyRoutes);
app.use('/api/leave-requests', leaveRequestRoutes);

app.post('/api/policies', auth(['admin']));
app.put('/api/policies/:id', auth(['admin']));
app.delete('/api/policies/:id', auth(['admin']));

app.post('/api/leave-requests', auth(['admin', 'employee']));

app.get('/', (req, res) => {
  res.send('Hello from the Virtual HR Assistant API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
