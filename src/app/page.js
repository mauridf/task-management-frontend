"use client"; 
import { useEffect, useState } from 'react';
import api from '../services/api';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await api.get('/tasks');
    setTasks(response.data);
  };

  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default HomePage;
