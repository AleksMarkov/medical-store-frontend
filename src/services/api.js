//services/api.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        // Attempt to refresh the access token
        const response = await axios.post(
          `${API_URL}/user/refresh-token`,
          {},
          { withCredentials: true }
        );
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);

        // Retry the failed request with the new token
        error.config.headers.Authorization = `Bearer ${accessToken}`;
        return axios(error.config);
      } catch (refreshError) {
        // If refresh fails, clear tokens and redirect to login
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
