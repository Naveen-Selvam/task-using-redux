import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import tasksReducer from "../reducers/tasksReducer";

const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      tasks: tasksReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default ConfigureStore;
