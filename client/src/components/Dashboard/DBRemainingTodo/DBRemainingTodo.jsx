import React from "react";
import TodoDetails from "../../Shared/TodoDetails/TodoDetails";

const DBRemainingTodo = () => {
  return (
    <div>
      <h2 className="text-xl">Remaining todo</h2>
      <div className="todo-details p-3 border-2 border-gray-200 border-dashed rounded-lg m-2 grid grid-cols-1 gap-5">
        <TodoDetails />
        <TodoDetails />
        <TodoDetails />
        <TodoDetails />
        <TodoDetails />
      </div>
    </div>
  );
};

export default DBRemainingTodo;
