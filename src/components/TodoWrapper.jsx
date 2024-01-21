import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./Todo.jsx";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

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

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(todos.length / todosPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];
    setTodos(parsedTodos);
  }, []); 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); 

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
      {currentTodos.map((todo, index) => (
        <ToDo
          key={todo.id}
          task={todo}
          onComplete={() => handleComplete(todo.id)}
          onDelete={() => handleDelete(todo.id)}
          todoNumber={indexOfFirstTodo + index + 1}
        />
      ))}
      {totalPages > 1 && (
        <div className="Pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "ActivePage" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoWrapper;
