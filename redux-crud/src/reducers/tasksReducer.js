const initialTasks = [];

const taskReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case "POST_TASKS": {
      return [action.payload, ...state];
    }
    case "GET_TASKS": {
      return [...action.payload];
    }
    case "EDIT_TASK": {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...action.payload };
        } else {
          return { ...task };
        }
      });
    }
    case "DELETE_TASK": {
      return state.filter((task) => {
        return task.id !== action.payload.id;
      });
    }
    default: {
      return [...state];
    }
  }
};

export default taskReducer;
