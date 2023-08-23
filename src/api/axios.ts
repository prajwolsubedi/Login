import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/users",
});

export default axiosClient;
