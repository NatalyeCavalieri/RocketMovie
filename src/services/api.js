import axios from "axios"

export const api = axios.create({
  baseURL: "https://movie-api-bo14.onrender.com",
})

