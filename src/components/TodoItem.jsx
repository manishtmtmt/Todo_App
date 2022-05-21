import React, { useState } from "react";
import styles from "./todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { v4 as uuidv4 } from "uuid";

const TodoItem = ({ id, value, deleteTodo, completedTodo }) => {
  // const [isChecked, setIsChecked] = useState(isCompleted);

  return (
    <div className="div2">
      {/* <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      /> */}

      <span className="checkbox" onClick={() => completedTodo([id, value])}>
        <FontAwesomeIcon icon={faSquare} />
      </span>
      {value}
      {/* <span className={isChecked ? styles.completed : ""}>{value}</span> */}

      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export { TodoItem };
