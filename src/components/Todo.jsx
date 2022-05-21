import React, { useState } from "react";
import "../styles.css";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import { TodoCompleted } from "./TodoCompleted";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [toggle, setToggle] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        value: newTodo,
        isCompleted: false
      }
    ]);
  };

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo.id !== value));
  };

  const completedTodo = ([id, value]) => {
    // console.log(id,value)
    setCompletedTodos([
      ...completedTodos,
      {
        id: id,
        value: value,
        isCompleted: true
      }
    ]);
    deleteTodo(id);
  };
  console.log(completedTodos);
  return (
    <div>
      <h1>TodoApp</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completedTodo={completedTodo}
      />
      <button className="toggleBtn" onClick={() => setToggle(!toggle)}>
        SHOW COMPLETED TO-DOS
      </button>
      {toggle ? <TodoCompleted completedTodos={completedTodos} /> : ""}
    </div>
  );
};

export { Todo };
