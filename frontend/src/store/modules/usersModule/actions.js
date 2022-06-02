import axios from "axios";
import router from "@/router/index";

const apiUrl = "http://localhost:4000/api";

// LOGIN USER ACTION
const logInUser = (context, req) => {
  context.commit("SET_LOGIN");
  axios
    .post(`${apiUrl}/users/login`, req)
    .then(({ data }) => {
      context.commit("SET_LOGIN_SUCCESS", data);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", true);
      router.push("/");
    })
    .catch(({ response }) => {
      const { msg } = response.data;
      console.log(msg);
      context.commit("SET_LOGIN_ERROR", msg);
    });
};

export default {
  logInUser,
};
