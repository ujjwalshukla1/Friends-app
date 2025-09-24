import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

export const axiosInstance = axios.create({
  baseURL: "https://friends-app-1-62ci.onrender.com/api",
  withCredentials: true, // send cookies with the request
});
