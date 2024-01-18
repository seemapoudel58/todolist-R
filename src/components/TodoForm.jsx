import React, {useState} from 'react'

const TodoForm = (props) => {
    const[ value, setValue]= useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        props(value);
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