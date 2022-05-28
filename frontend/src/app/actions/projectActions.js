import {
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
} from "../actionTypes";

import axiosClient from "../axiosClient";

// Crear nuevos productos
export function addNewProjectAction(project) {
  return (dispatch) => {
    dispatch(addProject());

    try {
      axiosClient.post("/projects", project);

      dispatch(addProjectSuccess(project));
    } catch (error) {
      console.log(error);
      dispatch(addProjectError(true));
    }
  };
}

const addProject = () => ({
  type: ADD_PROJECT,
});

// si el producto se guarda en la base de datos del
const addProjectSuccess = (project) => ({
  type: ADD_PROJECT_SUCCESS,
  payload: project,
});

// si hubo un error
const addProjectError = (value) => ({
  type: ADD_PROJECT_ERROR,
  payload: value,
});
