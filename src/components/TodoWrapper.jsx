import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
    const [todos, setTodos]= useState([]);

    const addTodo =(task)=>{
        setTodos([...todos,
            {id:uuidv4() ,
            task: task,
            completed:false,
        }
        ])

    }
  return (
    <div>
        <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default TodoWrapper;