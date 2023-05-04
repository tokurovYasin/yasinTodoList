import { Input } from "@mui/material";
import React, { useState } from "react";
import "./TodoList.css";

const AddTodo = (props) => {
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (!task) {
      alert("input is empty");
      return;
    }

    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };

    props.handleTask(newTask);

    setTask("");
  };

  return (
    <div>
      <div className="addtodo">
        <h2> стилизовать не успел </h2>
        <h2>ADD TODO component</h2>
        <input
          className="input"
          value={task}
          type="text"
          onChange={handleInput}
        />
        <button onClick={handleAdd}>add task</button>
      </div>
    </div>
  );
};

export default AddTodo;
