import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed pupy", rowAssigned: "User Nne" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User Three" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "User Four",
    },
  ]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };

    setTodos((todos) => [...todos, newTodo]);
    console.log(todos);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" type="button" onClick={addTodo}>
            Add new todo
          </button>

          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
