import React from "react";

const TodoList = props => {
  const todoListItems = props.todos.map(todo => {
    return <li key={todo.id}>{todo.text}</li>;
  });

  return <ul>{todoListItems}</ul>;
};
export default TodoList;
