import React, { useState, useEffect } from "react";

import TaskForm from "./TaskForm";
import ShowTasks from "./ShowTasks";
import { startGetTasks } from "../actions/Taskaction";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const GirdWrapper = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr;
`;

const MyTask = (props) => {
  const [addTask, SetAddTask] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetTasks());
  }, []);

  const handleClick = () => {
    SetAddTask(true);
  };
  const toggleFunc = () => {
    SetAddTask(false);
  };

  return (
    <GirdWrapper>
      <div style={{ overflowY: "auto" }}>
        <ShowTasks />
      </div>
      <div style={{ marginTop: "5rem", marginLeft: "7rem" }}>
        {!addTask && (
          <button className="addbutton" onClick={handleClick}>
            Add Task
          </button>
        )}
      </div>

      {addTask && <TaskForm toggleFunc={toggleFunc} />}
    </GirdWrapper>
  );
};

export default MyTask;
