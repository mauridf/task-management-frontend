import React from 'react';
import api from '../services/api';

const TaskItem = ({ task, fetchTasks }) => {
  const deleteTask = async () => {
    await api.delete(`/tasks/${task.id}`);
    fetchTasks();
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={deleteTask}>Delete</button>
      {/* Adicione aqui o código para edição e visualização de subtarefas */}
    </div>
  );
};

export default TaskItem;
