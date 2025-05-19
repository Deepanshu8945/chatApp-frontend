import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://chatapp-backend-o1br.onrender.com",
    withCredentials:true,
})