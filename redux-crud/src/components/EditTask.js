import React from "react";
import TaskForm from "./TaskForm";

const EditTask = (props) => {
  const { id, title, status } = props;

  return (
    <div>
      <TaskForm id={id} title={title} status={status} />
    </div>
  );
};

export default EditTask;
