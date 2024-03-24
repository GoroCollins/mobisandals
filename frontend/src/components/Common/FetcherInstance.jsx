import axios from "axios";
import { baseURL } from "../common/EndPoints.jsx";
const accessToken = localStorage.getItem("access_token");
export const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true, // Ensure cookies are sent with requests for authentication
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
  });