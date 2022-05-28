import { combineReducers } from "redux";
import projectsReducer from "./reducers/projectsReducer";
import usersReducer from "./reducers/usersReducer";

export default combineReducers({
  projects: projectsReducer,
  users: usersReducer,
});
