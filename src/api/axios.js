import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://minerva-world.onrender.com/",
    //baseURL: "http://localhost:5005",
    headers: {
        "Content-Type": "application/json",
    },
});

export function setAuthToken(token) {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
}

export default apiClient;
