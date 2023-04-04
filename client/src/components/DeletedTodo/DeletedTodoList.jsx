import React, { useEffect, useState } from "react";
import TodoDetails from "../Shared/TodoDetails/TodoDetails";

const DeletedTodoList = () => {
  const [allTodo, setAllTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/to-do?sort=-createdAt&status=deleted")
      .then((res) => res.json())
      .then((data) => {
        setAllTodo(data.data);
      });
  }, []);
  return (
    <div className="p-3 border-2 border-gray-200 border-dashed rounded-lg grid grid-cols-1 gap-5">
      {allTodo?.result?.map((todo) => (
        <TodoDetails key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default DeletedTodoList;
