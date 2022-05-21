import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Add a to-do..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (value) {
            addTodo(value);
            setValue("");
          } else {
            alert("Please enter at least one character");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export { TodoInput };
