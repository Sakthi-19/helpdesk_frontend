import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authTokens = localStorage.getItem("authTokens");
    if (authTokens) {
      config.headers.Authorization = `Bearer ${JSON.parse(authTokens).access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
