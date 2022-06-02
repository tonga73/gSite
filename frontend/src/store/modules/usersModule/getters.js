// ALERT GETTERS
const alertMessage = (state) => state.message;

const alertError = (state) => state.error;

// LOGIN STATUS GETTER
const checkLogInState = (state) => state.isLoggedIn;

export default {
  checkLogInState,
  alertMessage,
  alertError,
};
