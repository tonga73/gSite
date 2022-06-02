import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: "http://localhost:4000/api",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
