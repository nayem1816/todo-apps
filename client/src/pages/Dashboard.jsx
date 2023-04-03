import React from "react";
import TotalCard from "../components/Dashboard/TotalCard/TotalCard";
import { FcTodoList } from "react-icons/fc";
import { MdRestore, MdRestoreFromTrash, MdDoneAll } from "react-icons/md";
import NewTodo from "../components/Dashboard/NewTodo/NewTodo";
import LatestTodo from "../components/Dashboard/LatestTodo/LatestTodo";
import DBRemainingTodo from "../components/Dashboard/DBRemainingTodo/DBRemainingTodo";
import DBCompletedTodo from "../components/Dashboard/DBCompletedTodo/DBCompletedTodo";
import DBDeletedTodo from "../components/Dashboard/DBDeletedTodo/DBDeletedTodo";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 my-5 gap-5">
        <TotalCard title={"Total Todo"} number={10} Icon={FcTodoList} />
        <TotalCard title={"Remaining Todo"} number={10} Icon={MdRestore} />
        <TotalCard title={"Completed Todo"} number={10} Icon={MdDoneAll} />
        <TotalCard
          title={"Deleted Todo"}
          number={10}
          Icon={MdRestoreFromTrash}
        />
      </div>
      <div className="my-10">
        <NewTodo />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="latest-todo">
          <LatestTodo />
        </div>
        <div className="remaining-todo">
          <DBRemainingTodo />
        </div>
        <div className="completed-todo">
          <DBCompletedTodo />
        </div>
        <div className="all-todo">
          <DBDeletedTodo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
