import React, { useEffect, useState } from "react";
import TotalCard from "../components/Dashboard/TotalCard/TotalCard";
import { FcTodoList } from "react-icons/fc";
import { MdRestore, MdRestoreFromTrash, MdDoneAll } from "react-icons/md";
import NewTodo from "../components/Dashboard/NewTodo/NewTodo";
import LatestTodo from "../components/Dashboard/LatestTodo/LatestTodo";
import DBRemainingTodo from "../components/Dashboard/DBRemainingTodo/DBRemainingTodo";
import DBCompletedTodo from "../components/Dashboard/DBCompletedTodo/DBCompletedTodo";
import DBDeletedTodo from "../components/Dashboard/DBDeletedTodo/DBDeletedTodo";

const Dashboard = () => {
  const [todoData, setTodoData] = useState([]);
  const [remainingTodo, setRemainingTodo] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);
  const [deletedTodo, setDeletedTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/to-do?sort=-createdAt")
      .then((res) => res.json())
      .then((data) => {
        setTodoData(data.data);
      });

    fetch("http://localhost:8080/api/v1/to-do?status=remaining")
      .then((res) => res.json())
      .then((data) => {
        setRemainingTodo(data.data);
      });

    fetch("http://localhost:8080/api/v1/to-do?status=complete")
      .then((res) => res.json())
      .then((data) => {
        setCompletedTodo(data.data);
      });

    fetch("http://localhost:8080/api/v1/to-do?status=deleted")
      .then((res) => res.json())
      .then((data) => {
        setDeletedTodo(data.data);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 my-5 gap-5">
        <TotalCard
          title={"Total Todo"}
          number={todoData?.total || 0}
          Icon={FcTodoList}
        />
        <TotalCard
          title={"Remaining Todo"}
          number={remainingTodo?.total || 0}
          Icon={MdRestore}
        />
        <TotalCard
          title={"Completed Todo"}
          number={completedTodo?.total || 0}
          Icon={MdDoneAll}
        />
        <TotalCard
          title={"Deleted Todo"}
          number={deletedTodo?.total || 0}
          Icon={MdRestoreFromTrash}
        />
      </div>
      <div className="my-10">
        <NewTodo />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="latest-todo">
          <LatestTodo todoData={todoData?.result?.slice(0, 5)} />
        </div>
        <div className="remaining-todo">
          <DBRemainingTodo remainingTodo={remainingTodo?.result?.slice(0, 5)} />
        </div>
        <div className="completed-todo">
          <DBCompletedTodo completedTodo={completedTodo?.result?.slice(0, 5)} />
        </div>
        <div className="all-todo">
          <DBDeletedTodo deletedTodo={deletedTodo?.result?.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
