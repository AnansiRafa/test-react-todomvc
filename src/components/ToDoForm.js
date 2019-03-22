import React from "react";

export default function ToDoForm(props) {
  const { input, handleInput, addTodo } = props;
  return (
    <div className="form">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={e => handleInput(e.target.value)}
          autoFocus
          className="textform"
        />
        <br />
        <input type="submit" value="Add New Item" className="btn btn-light" />
      </form>
    </div>
  );
}
