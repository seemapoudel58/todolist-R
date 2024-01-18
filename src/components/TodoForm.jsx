import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const[ value, setValue]= useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);
        setValue('');
    };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder='Enter your todo.' 
         value={value}
         onChange={(e)=>{
            setValue(e.target.value);
         }}/>
        <button type='submit'>+</button>
    </form>
  )
}

export default TodoForm