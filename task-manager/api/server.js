const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data (In-Memory Database)
let tasks = [
  { id: 1, title: 'Task 1', description: 'Description 1', status: 'To Do' },
  { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress' },
];

// Routes
// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task's status
// Update a task's status
app.put('/tasks/:id', (req, res) => {
const { id } = req.params; // Task ID from URL
const { status } = req.body; // New status from the request body
const task = tasks.find(t => t.id === parseInt(id)); // Find the task by ID

if (task) {
    task.status = status; // Update the status
    res.json(task); // Respond with the updated task
} else {
    res.status(404).json({ message: 'Task not found' });
}
});
  

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id != id);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
