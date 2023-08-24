import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://18.136.197.25:8080",
});

export default axiosClient;


// http://18.136.197.25:8080
