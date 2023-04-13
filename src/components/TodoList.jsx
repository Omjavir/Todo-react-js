import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.length === 0 && "No Todo's yet"}
      {todos.map((todo) => {
        const { id } = todo;
        return (
          <TodoItem
            {...todo}
            key={id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
