import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state: {
    user: JSON.parse(localStorage.getItem("user")),
    isLoggedIn: !!JSON.parse(localStorage.getItem("isLoggedIn")),
    loading: true,
    error: false,
    message: "",
  },
  actions,
  mutations,
  getters,
};
