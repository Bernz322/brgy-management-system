import axios from "axios";

// const Base_URL = "https://zappyfashion.herokuapp.com/api/";
const Base_URL = "http://localhost:5000/api/";

export const publicRequest = axios.create({
    baseURL: Base_URL,
})
