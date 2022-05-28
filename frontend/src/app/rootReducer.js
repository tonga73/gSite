import { combineReducers } from "redux";
import projectsReducer from "./reducers/projectsReducer";

export default combineReducers({
  projects: projectsReducer,
});
