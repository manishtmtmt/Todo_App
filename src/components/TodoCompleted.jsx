import React from "react";
import styles from "./todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

const TodoCompleted = ({ completedTodos }) => {
  return (
    <>
      {completedTodos.map((completedTodo) => (
        <div className="div3">
          <span>
            <FontAwesomeIcon icon={faSquareCheck} />
          </span>
          <span className={completedTodo.isCompleted ? styles.completed : ""}>
            {completedTodo.value}
          </span>
        </div>
      ))}
    </>
  );
};

export { TodoCompleted };
