// ALERT MUTATIONS
const SET_ALERT_STATE = (state, { message, error }) => {
  state.message = message;
  state.error = error;
};

// LOGIN USER MUTATIONS
const SET_LOGIN = (state) => {
  state.loading = true;
};

const SET_LOGOUT = (state) => {
  state.user = JSON.parse(localStorage.getItem("user"));
  state.isLoggedIn = false;
  state.error = false;
  state.message = `Sesión cerrada correctamente`;
  state.loading = false;
};

const SET_LOGIN_SUCCESS = (state, payload) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.error = false;
  state.message = "";
  state.loading = false;
};

const SET_LOGIN_ERROR = (state, payload) => {
  state.error = true;
  state.message = payload;
  state.loading = false;
};

// EXPORT ALL MUTATIONS
export default {
  SET_ALERT_STATE,
  SET_LOGIN,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
};
