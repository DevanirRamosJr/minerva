import axios from "axios";

const apiClient = axios.create({
    // baseURL: "https://minerva-world.onrender.com/", // Replace with your FastAPI base URL
    baseURL: "http://localhost:5005",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;