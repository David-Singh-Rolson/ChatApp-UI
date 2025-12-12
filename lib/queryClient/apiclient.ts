import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Spring Boot Backend
  withCredentials: true, // Allow cookies (JWT HttpOnly if used)
});

// Request interceptor

apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage (only in browser)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error("API Error:", error);

    // Example: If token expired
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Token may have expired.");

      // later: refresh token logic can go here
    }

    return Promise.reject(error);
  },
);

export default apiClient;
