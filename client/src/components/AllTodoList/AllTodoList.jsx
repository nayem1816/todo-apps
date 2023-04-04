import React, { useEffect, useState } from "react";
import TodoDetails from "../Shared/TodoDetails/TodoDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const AllTodoList = () => {
  const [user, loading] = useAuthState(auth);
  const [allTodo, setAllTodo] = useState([]);

  useEffect(() => {
    fetch(
      `https://todo-apps-neon.vercel.app/api/v1/to-do?sort=-createdAt&userEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllTodo(data.data);
      });
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-3 border-2 border-gray-200 border-dashed rounded-lg grid grid-cols-1 gap-5">
      {allTodo?.total > 0 ? (
        <div className="grid grid-cols-1 gap-5">
          {allTodo?.result?.map((todo) => (
            <TodoDetails key={todo._id} todo={todo} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-xl text-gray-500">
          No todo found. Please add a todo.
        </p>
      )}
    </div>
  );
};

export default AllTodoList;
