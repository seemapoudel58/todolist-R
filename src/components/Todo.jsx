import React from 'react';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';

const ToDo = ({task, onComplete, onDelete}) => {
  return (
    <div className='Todo'>
      <ul
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.name}
      </ul>
      <div>
        <FaCheckCircle className="FaCheckCircle" onClick={onComplete}/>
        <FaTrash className="FaTrash" onClick={onDelete} />
      </div>
    </div>
  );
}

export default ToDo;
