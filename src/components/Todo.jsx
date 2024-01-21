import React from 'react';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';

const ToDo = ({ task, onComplete, onDelete, todoNumber }) => {
  return (
    <div className='Todo'>
      <ul
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {todoNumber && <span style={{ marginRight: '9px' }}>{todoNumber}.</span>}
        {task.name}
      </ul>
      <div>
        <FaCheckCircle className="FaCheckCircle" onClick={onComplete} />
        <FaTrash className="FaTrash" onClick={onDelete} />
      </div>
    </div>
  );
}

export default ToDo;
