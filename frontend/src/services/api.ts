import axios from "axios";
import authInterceptor from "./authInterceptor";

import { getToken } from "./auth";

// Trocar para localhost:8000 em ambiente de desenvolvimento, mas não commitar
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/api/"
      : "http://prp-api.tulsa.ifrn.edu.br/api/",
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(undefined, authInterceptor(api));

export default api;
