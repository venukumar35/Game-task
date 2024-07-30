import axios, { InternalAxiosRequestConfig } from "axios";

export const BASE_URL = "http://localhost:4000/api/";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    config.headers["Content-Type"] = "application/json";

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

export default apiClient;
