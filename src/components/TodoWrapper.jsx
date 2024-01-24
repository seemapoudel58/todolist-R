import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./Todo.jsx";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const todosPerPage = 3;

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedValue =value.trim();
    if(trimmedValue !== ''){
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: uuidv4(), name: value, completed: false },
      ]);
    }
    setValue("");
    setCurrentPage(1); 
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

  const totalPages = Math.ceil(todos.length / todosPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageChange(index + 1)}
        className={currentPage === index + 1 ? "ActivePage" : ""}
      >
        {index + 1}
      </button>
    ));
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
      {todos.slice((currentPage - 1) * todosPerPage, currentPage * todosPerPage).map((todo, index) => (
        <ToDo
          key={todo.id}
          task={todo}
          onComplete={() => handleComplete(todo.id)}
          onDelete={() => handleDelete(todo.id)}
          todoNumber={index + 1 + (currentPage - 1) * todosPerPage}
        />
      ))}
      {totalPages >= 1 && (
        <div className="Pagination">
          {renderPageNumbers()}
        </div>
      )}
    </div>
  );
};

export default TodoWrapper;
