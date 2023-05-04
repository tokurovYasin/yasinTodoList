import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";

const TodoFunction = () => {
  // создали состояние , котороя будет хранить все таски
  let [todos, setTodos] = useState([]);
  // состояние для редоктируемого todo
  const [editedObj, setEditedObj] = useState(null);
  console.log(todos);

  // функ , котороя обновляет состояние todos , принимает аск , который получает из дочерного компонента (AddTodo)
  const handleTask = (newObj) => {
    // копируем все что есть в todos до этого
    let newTodos = [...todos];
    // добавляем  новый таск (обьект) в массив newTodos
    newTodos.push(newObj);
    // обновляем состояние todos на актуальные данные
    setTodos(newTodos);
  };

  // функ для изменение статуса тасков
  function changeStatus(id) {
    // перебераем todos и , если id у кого совподет с тем id , который передали при вызове , то сеняем статус противо положное, в остальных случаии обьект без исменении
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    // обновляем состояние
    setTodos(newTodos);
  }

  // ? edit

  // функ для получение редактируемого todo
  function getEditedObj(id) {
    let oneObj = todos.find((item) => item.id === id);
    // обновляем editedObj на редоктиро
    // console.log(oneObj);
    setEditedObj(oneObj);
  }

  function saveChanges(newObj) {
    let newTodos = [...todos];

    newTodos = newTodos.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });

    setTodos(newTodos);

    setEditedObj(null);
  }

  // ? delete

  function deleteTask(id) {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }
  return (
    <div>
      <div>
        <AddTodo handleTask={handleTask} />
        <TodoList
          getEditedObj={getEditedObj}
          changeStatus={changeStatus}
          todos={todos}
          deleteTask={deleteTask}
        />

        {editedObj ? (
          <EditTodo editedObj={editedObj} saveChanges={saveChanges} />
        ) : null}
      </div>
    </div>
  );
};

export default TodoFunction;
