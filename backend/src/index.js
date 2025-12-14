
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
