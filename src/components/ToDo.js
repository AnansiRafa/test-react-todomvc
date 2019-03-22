import React from "react";

export default function ToDo(props) {
  const {
    title,
    completed,
    toggleTodo,
    toggleDelete,
    index,
    showDelete,
    deleteTodo
  } = props;
  return (
    <div className="todo">
      <div
        onMouseOver={() => toggleDelete(index, true)}
        onMouseLeave={() => toggleDelete(index, false)}
      >
        <h6 className={completed ? "complete" : ""}>
          <b>{title}</b>
        </h6>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(index)}
        />{" "}
        complete
        <br />
        {showDelete ? (
          <i
            className="fas fa-trash destroy"
            onClick={() => deleteTodo(index)}
          />
        ) : null}
      </div>
    </div>
  );
}
