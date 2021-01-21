import React from "react";
import { useSelector } from "react-redux";
import EachTask from "./EachTask";

const ShowTasks = (props) => {
  const data = useSelector((state) => state.tasks);

  return (
    <div>
      <h1>My Tasks - {data.length}</h1>
      {data.map((task) => {
        return <EachTask {...task} key={task.id} />;
      })}
    </div>
  );
};

export default ShowTasks;
