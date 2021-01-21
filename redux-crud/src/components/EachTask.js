import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startDeleteTasks } from "../actions/Taskaction";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditTask from "./EditTask";

const TaskWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border-left: 5px solid;
  border-left-color: ${(props) => (props.status ? "green" : "red")};
`;

const EachTask = (props) => {
  const [editTask, setEditTask] = useState(false);
  const dispatch = useDispatch();
  const { title, status, id } = props;

  const handleDelete = (id) => {
    const del = window.confirm("Are you sure");
    {
      del && dispatch(startDeleteTasks(id));
    }
  };

  const handleEdit = () => {
    setEditTask(!editTask);
  };
  return (
    <TaskWrapper status={status}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <MdDelete
          size={25}
          style={{ textAlign: "right" }}
          onClick={() => handleDelete(id)}
        />

        <MdEdit size={25} onClick={() => handleEdit(id)} />
        {editTask && <EditTask {...props} />}
      </div>
    </TaskWrapper>
  );
};

export default EachTask;
