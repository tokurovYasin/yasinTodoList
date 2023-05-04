import React, { useState } from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <>
      <div className="addtodo">
        <h2>TODO LIST component</h2>
        <ul>
          <div className="ull">
            {/* перебкраем массив todos(который стейт , который получили из App.js) и на каждый обьект в данном массиве возврощяем элемент li */}
            {props.todos.map((item) => (
              <li className={item.status ? "completed" : ""} key={item.id}>
                <div>
                  {" "}
                  <input
                    style={{ width: "8%" }}
                    className="check"
                    type="checkbox"
                    onChange={() => props.changeStatus(item.id)}
                  />
                </div>
                <div style={{ width: "60%" }}>{item.task}</div>
                <div style={{ width: "30%" }}>
                  <button
                    className="but"
                    onClick={() => props.getEditedObj(item.id)}
                  >
                    edit
                  </button>
                  <button
                    className="but"
                    onClick={() => props.deleteTask(item.id)}
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default TodoList;
