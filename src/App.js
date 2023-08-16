import React, { useState } from "react";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import NewToDoForm from "./components/NewToDoForm";

function App() {
  const [showAddToDoForm, setShowAddToDoForm] = useState(false);

  //Distrcturing the array to control the state
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "User One" },
    { rowNumber: 4, rowDescription: "Vaccum", rowAssigned: "User Two" },
  ]);

  const addToDo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newToDo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };

    //Adding the new element in the array.
    setTodos((todos) => [...todos, newToDo]);
  };

  const deleteToDo = (deleteToDoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteToDoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your toDOs</div>

        <div className="card-body">
          <ToDoTable todos={todos} deleteToDo={deleteToDo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowAddToDoForm(!showAddToDoForm)}
          >
            {showAddToDoForm ? 'Close New ToDo' : 'New ToDo'}
          </button>
          {showAddToDoForm && <NewToDoForm addToDo={addToDo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
