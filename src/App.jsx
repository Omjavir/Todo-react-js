import React, { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("todo");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <React.Fragment>
      <NewTodo onSubmit={addTodo} />
      <h2>Add Todo</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </React.Fragment>
  );
};

export default App;
