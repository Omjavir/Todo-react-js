import React, { useState } from "react";

const NewTodo = ({ onSubmit }) => {
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo === "") return;
    onSubmit(newTodo);
    setNewTodo("")
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">New Todo</label>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
    </React.Fragment>
  );
};

export default NewTodo;
