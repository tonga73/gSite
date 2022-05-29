import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "../actionTypes";

import axiosClient from "../axiosClient";

export function loginUserAction(user) {
  return (dispatch) => {
    dispatch(loginUser());

    axiosClient
      .post("/users/login", user)
      .then(
        ({ data }) => (
          dispatch(loginUserSuccess(data)),
          localStorage.setItem("user", JSON.stringify(data))
        )
      )
      .catch(({ response }) => {
        const { msg } = response.data;
        console.log(msg);
        dispatch(loginUserError(true));
      });
  };
}

const loginUser = () => ({
  type: LOGIN_USER,
});

const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

const loginUserError = (value) => ({
  type: LOGIN_USER_ERROR,
  payload: value,
});

export function createUserAction(user) {
  return (dispatch) => {
    dispatch(createUser());

    axiosClient
      .post("/users", user)
      .then(
        ({ data }) => (
          dispatch(createUserSuccess(data)),
          localStorage.setItem("user", JSON.stringify(data))
        )
      )
      .catch(({ response }) => {
        const { msg } = response.data;
        console.log(msg);
        dispatch(createUserError(true));
      });
  };
}

const createUser = () => ({
  type: CREATE_USER,
});

const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});

const createUserError = (value) => ({
  type: CREATE_USER_ERROR,
  payload: value,
});
