import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {todos.map((todo, index) => {
          return (
            <TodoListItem
              index={index}
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
      </ul>
    </>
  );
};
