import axios from "axios";

const postTask = (data) => {
  return { type: "POST_TASKS", payload: data };
};

const getTask = (data) => {
  return { type: "GET_TASKS", payload: data };
};

const deleteTask = (data) => {
  return { type: "DELETE_TASK", payload: data };
};
const editTasks = (data) => {
  return { type: "EDIT_TASK", payload: data };
};

export const startPostTasks = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3033/api/tasks", data)
      .then((response) => {
        dispatch(postTask(data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const startGetTasks = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        const data = response.data;
        dispatch(getTask(data.reverse()));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const startDeleteTasks = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3033/api/tasks/${id}`)
      .then((response) => {
        dispatch(deleteTask(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const startEditTask = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3033/api/tasks/${id}`, data)
      .then((response) => {
        dispatch(editTasks(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
