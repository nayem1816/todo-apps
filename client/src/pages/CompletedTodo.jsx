import React from "react";
import CompletedTodoList from "../components/CompletedTodo/CompletedTodoList";

const CompletedTodo = () => {
  return (
    <div>
      <h2 className="text-xl mb-5">Completed List</h2>
      <CompletedTodoList />
    </div>
  );
};

export default CompletedTodo;
