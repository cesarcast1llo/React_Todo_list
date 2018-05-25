import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import "./TodoList.css";
  
var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <h1>Todo List</h1>
        <TodoList />
{/* TodoList is getting functions called on TodoList.js */}
    </div>,
    destination
// destination is calling #container to link html&js pages

);