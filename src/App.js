import React, { useState } from "react";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import NewToDoForm from "./components/NewToDoForm";

function App() {

  //Distrcturing the array to control the state
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "User One" },
    { rowNumber: 4, rowDescription: "Vaccum", rowAssigned: "User Two" },
  ]);

  const addTodo = () => {
    if (todos.length > 0) {
      const newToDo = {
        rowNumber: todos.length + 1,
        rowDescription: "New ToDO",
        rowAssigned: "User Three",
      };

      //Adding the new element in the array.
      setTodos(todos => [...todos,newToDo])
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your toDOs</div>

        <div className="card-body">
          <ToDoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add new todo
          </button>
          <NewToDoForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
