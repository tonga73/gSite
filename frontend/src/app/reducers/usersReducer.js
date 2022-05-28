import { LOGIN_USER } from "../actionTypes";

const initialState = {
  user: [],
  isLoggedIn: false,
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
