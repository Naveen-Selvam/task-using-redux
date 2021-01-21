import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import { startPostTasks } from "../actions/Taskaction";
import { customStyles } from "../Style";
import { startEditTask } from "../actions/Taskaction";

const TaskForm = (props) => {
  const [openModal, setOpenModal] = useState(true);
  const [title, setTitle] = useState(props.title ? props.title : "");
  const [status, setStatus] = useState(props.status ? props.status : false);
  const { toggleFunc } = props;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "status") {
      setStatus(!status);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: props.id ? props.id : uuidv4(),
      title,
      status,
    };
    if (!props.id) {
      dispatch(startPostTasks(data));
      toggleFunc();
    } else {
      dispatch(startEditTask(props.id, data));
    }
    setOpenModal(false);
  };

  const handleCancel = () => {
    if (!props.id) {
      toggleFunc();
      setOpenModal(false);
    } else {
      setOpenModal(false);
    }
  };

  return (
    <Modal isOpen={openModal} style={customStyles}>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <label>Task</label> <br />
        <input
          className="title"
          type="text"
          value={title}
          onChange={handleChange}
          name="title"
        />
        <br />
        <label>Status</label>
        <input
          className="status"
          type="checkbox"
          name="status"
          checked={status}
          onChange={handleChange}
        />
        <br />
        <button className="butn">save</button>
        {"  "}
        <button className="butn" onClick={handleCancel}>
          cancel
        </button>
      </form>
    </Modal>
  );
};

export default TaskForm;
