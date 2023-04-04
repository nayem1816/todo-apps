import React from "react";
import TodoDetails from "../../Shared/TodoDetails/TodoDetails";

const DBDeletedTodo = ({ deletedTodo }) => {
  return (
    <div>
      <h2 className="text-xl">Deleted todo</h2>
      {deletedTodo?.length > 0 ? (
        <div className="todo-details p-3 border-2 border-gray-200 border-dashed rounded-lg m-2 grid grid-cols-1 gap-5">
          {deletedTodo?.map((todo) => (
            <TodoDetails todo={todo} key={todo?._id} />
          ))}
        </div>
      ) : (
        <div className="todo-details p-3 border-2 border-gray-200 border-dashed rounded-lg m-2 grid grid-cols-1 gap-5">
          <p className="my-10 text-xl text-gray-500">No deleted todo found.</p>
        </div>
      )}
    </div>
  );
};

export default DBDeletedTodo;
