import axios, { AxiosInstance, AxiosError } from "axios";

const REFRESH_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/refresh/"
    : "http://prp-api.tulsa.ifrn.edu.br/api/refresh/";

//para multiplas requisições
let isRefreshing = false;
let failedQueue: any[] = [];
let requestsLimit = 0;

// Processa a fila de promises
const processQueue = (token = null) => {
  failedQueue.forEach((req) => {
    req.headers["Authorization"] = "Bearer " + token;
  });
  requestsLimit = 0;
  failedQueue = [];
};

const interceptor = (axiosInstance: AxiosInstance) => (error: AxiosError) => {
  const _axios = axiosInstance;
  let originalRequest: any = {};
  originalRequest = error.config;

  // Se recebeu um status code 401 e nao é uma nova tentiva de request
  if (error.response?.status === 401 && !originalRequest._retry) {
    // Se existir alguma requisição concorrente atualizando o token
    // ela será mandada para uma fila
    if (isRefreshing) {
      failedQueue.push(originalRequest);
      requestsLimit++;
      if (requestsLimit > 50) return Promise.reject(error);
    }

    originalRequest._retry = true;
    isRefreshing = true;
    //
    const refreshToken = localStorage.getItem("refreshToken");
    return new Promise((resolve, reject) => {
      axios
        .post(REFRESH_URL, {
          refresh: refreshToken,
        })
        .then((data) => {
          const token = data.data.access;
          localStorage.setItem("accessToken", token);
          _axios.defaults.headers["Authorization"] = "Bearer " + token;
          originalRequest.headers["Authorization"] = "Bearer " + token;
          processQueue(token);
          resolve(_axios(originalRequest));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  return Promise.reject(error);
};

export default interceptor;
