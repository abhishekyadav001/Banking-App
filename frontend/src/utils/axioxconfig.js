import axios from "axios";
import { getLocalStorageItem } from "./localStorage";

// Create an axios instance
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor to add access token to headers if available
axiosInstance.interceptors.request.use(
  (config) => {
    let accessToken = getLocalStorageItem("accessToken");
    if (accessToken) config.headers["x-access-token"] = accessToken;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
