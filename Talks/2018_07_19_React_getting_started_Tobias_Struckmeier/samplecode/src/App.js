import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Learn Angular", isDone: true },
        { text: "Learn React", isDone: false },
        { text: "Learn Vue", isDone: false }
      ],
      newItem: ""
    };
  }

  toggleTodo(todoToToggle) {
    const nextTodos = this.state.todos.map(todo => {
      return todo === todoToToggle ? { ...todo, isDone: !todo.isDone } : todo;
    });

    this.setState(prevState => ({
      ...prevState,
      todos: nextTodos
    }));
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      const newTodo = { text: e.target.value, isDone: false };
      this.setState(prevState => ({
        ...prevState,
        todos: [newTodo, ...prevState.todos]
      }));
    }
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      newItem: value
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Todo's</h1>
        </header>

        <TodoList
          todos={this.state.todos}
          toggle={this.toggleTodo.bind(this)}
        />

        <div className="addTodo">
          <label htmlFor="newItem">Add new:</label>
          <input
            name="newItem"
            type="text"
            value={this.state.newItem}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
