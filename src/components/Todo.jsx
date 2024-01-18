import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ToDo = (task) => {
  return (
    <div  className='Todo'> 
    <ul>
      {task.task}
    </ul>
    <div>
      <FaCheckCircle />
      <FaTrash />
    </div>
    </div>
  )
}

export default ToDo