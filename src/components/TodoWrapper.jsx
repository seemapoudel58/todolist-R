import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./Todo.jsx"; 

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevState) => [
      ...prevState,
      { id: uuidv4(), name: value, completed: false },
    ]);
    setValue("");
    console.log(todos);
  };
  return (
    <div className="TodoWrapper">
      <h1 style={
        {
          display:'flex',
          justifyContent:'center',
          fontFamily:'times roman',
          fontSize:'35px'
        }
      }>Get Things Done!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="InputField"
          type="text"
          placeholder="Enter your todo."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="SubmitButton" type="submit">
          +
        </button>
      </form>
      {todos?.map((todo, index) => (
        <ToDo task={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoWrapper;
