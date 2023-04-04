import React from "react";
import DeletedTodoList from "../components/DeletedTodo/DeletedTodoList";

const DeletedTodo = () => {
  return (
    <div>
      <h2 className="text-xl mb-5">Deleted Todo List</h2>
      <DeletedTodoList />
    </div>
  );
};

export default DeletedTodo;
