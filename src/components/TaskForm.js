"use client";
import { useState } from 'react';
import api from '../services/api';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const createTask = async () => {
    await api.post('/tasks', { title, description, type });
    fetchTasks();
    setTitle('');
    setDescription('');
    setType('');
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />
      <button onClick={createTask}>Create Task</button>
    </div>
  );
};

export default TaskForm;
