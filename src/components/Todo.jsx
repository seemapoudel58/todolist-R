// Todo.jsx

import React from 'react';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';

const ToDo = (task) => {
  return (
    <div className='Todo'>
      <ul>{task.task.name}</ul>
      <div>
        <FaCheckCircle className="FaCheckCircle" />
        <FaTrash className="FaTrash" />
      </div>
    </div>
  );
}

export default ToDo;
