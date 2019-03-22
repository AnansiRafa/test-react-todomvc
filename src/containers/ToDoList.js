import React, { Component } from "react";
import Todo from "../components/ToDo";
import TodoForm from "../components/ToDoForm";

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todos: []
    };
  }
  handleInput(input) {
    this.setState({
      input: input
    });
  }

  addTodo(e) {
    e.preventDefault();
    let input = this.state.input.trim();
    if (!input) {
      alert("Can't be empty!");
      return;
    }
    let item = {};
    item.title = input;
    item.completed = false;
    item.showDelete = false;
    let todolist = this.state.todos;
    todolist.push(item);

    this.setState({
      input: "",
      todos: todolist
    });
  }

  toggleTodo(index) {
    let todos = this.state.todos;
    let todo = todos[index];
    todo.completed = !todo.completed;
    this.setState({
      todos: todos
    });
    console.log(this.state);
  }

  toggleDelete(index, bool) {
    let todos = this.state.todos;
    let todo = todos[index];
    todo.showDelete = bool;
    this.setState({
      todos: todos
    });
  }

  deleteTodo(index) {
    let list = this.state.todos;
    list.splice(index, 1);
    this.setState({
      todos: list
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <TodoForm
          handleInput={this.handleInput.bind(this)}
          addTodo={this.addTodo.bind(this)}
          input={this.state.input}
        />
        <h5>
          {this.state.todos.length === 0 ? (
            "No"
          ) : (
            <strong> {this.state.todos.length} </strong>
          )}{" "}
          {this.state.todos.length === 1 ? "Item" : "Items"}
        </h5>
        <ul>
          {this.state.todos.length !== 0
            ? this.state.todos.map((todo, index) => (
                <li>
                  <Todo
                    key={index}
                    index={index}
                    title={todo.title}
                    completed={todo.completed}
                    showDelete={todo.showDelete}
                    toggleTodo={this.toggleTodo.bind(this)}
                    toggleDelete={this.toggleDelete.bind(this)}
                    deleteTodo={this.deleteTodo.bind(this)}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}
