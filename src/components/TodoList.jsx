import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList = ({ todos, deleteTodo, completedTodo }) => {
  return (
    <div className="todoList">
      <h3>Here is your Todo list</h3>

      {todos.map((data) => (
        <TodoItem
          id={data.id}
          value={data.value}
          deleteTodo={deleteTodo}
          completedTodo={completedTodo}
        />
      ))}
    </div>
  );
};

export { TodoList };
