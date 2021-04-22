import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, deleteTodo } = props;
  const line = (e) => {
    if (e.target.className !== "line") {
      e.target.className = "line";
    } else {
      e.target.className = "noLine";
    }
  };

  return (
    <div className="todoItem">
      <div onClick={line}>{content}</div>
      <button value={id} onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
