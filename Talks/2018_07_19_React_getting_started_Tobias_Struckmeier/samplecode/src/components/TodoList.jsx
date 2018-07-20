import React, { Component } from "react";
import "./TodoList.css";

export default class TodoList extends Component {
  render() {
    return (
      <section className="todoList">
        {this.props.todos.map((todo, idx) => (
            <div className={"todoItem " + (todo.isDone?'done':'')} key={idx} onClick={(e) => this.props.toggle(todo)}>
              {todo.text}
            </div>
        ))}
      </section>
    );
  }
}
