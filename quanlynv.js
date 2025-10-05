const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/employees', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Model nhân viên
const Employee = mongoose.model('Employee', new mongoose.Schema({
  name: String,
  role: String
}));

// CRUD API
app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.post('/employees', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json(employee);
});

app.put('/employees/:id', async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(employee);
});

app.delete('/employees/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
