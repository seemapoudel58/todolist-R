import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./Todo.jsx";

const TodoWrapper = () => {
  const initialTodos = []; // Set initial todos as needed
  const [todos, setTodos] = useState(initialTodos);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name: value, completed: false },
    ]);
    setValue("");
  };

  const handleComplete = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleRevert = () => {
    setTodos(initialTodos);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];
    setTodos(parsedTodos);
  }, []); // Load todos from local storage on component mount

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Save todos to local storage whenever they change

  return (
    <div className="TodoWrapper">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "times roman",
          fontSize: "35px",
        }}
      >
        Get Things Done!
      </h1>
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
      {todos?.map((todo) => (
        <ToDo
          key={todo.id}
          task={todo}
          onComplete={() => handleComplete(todo.id)}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}
      {todos.length > 0 && (
        <button className="RevertButton" onClick={handleRevert}>
          Reset
        </button>
      )}
    </div>
  );
};

export default TodoWrapper;
