import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import ToDo from './ToDo';

const TodoWrapper = () => {
    const [todos, setTodos]= useState([]);

    const addTodo =(task)=>{
        setTodos([...todos,
            {id:uuidv4() ,
            task: task,
            completed:false,
        }
        ])
        console.log(task)

    }
  return (
    <div>
        <TodoForm addTodo={addTodo} />
        {todos.map((task, index)=>{
          <ToDo task={task} key={index.id} />        
        })}
    </div>
  )
}

export default TodoWrapper;