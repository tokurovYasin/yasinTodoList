import React, { useState } from "react";

const EditTodo = ({ editedObj, saveChanges }) => {
  // состояние для хранения обновленного todo
  const [editedTodo, setEditedTodo] = useState(editedObj);
  // функ для того чтобы записать значение из инпута под ключом task
  // при этом не потеряв остальные ключи и значение (status , id)
  function editTodo(e) {
    setEditedTodo({ ...editedTodo, task: e.target.value });
  }

  return (
    <div>
      <h3>edit</h3>
      <input type="text" onChange={editTodo} value={editedTodo.task} />
      <button onClick={() => saveChanges(editedTodo)}>save</button>
    </div>
  );
};

export default EditTodo;
