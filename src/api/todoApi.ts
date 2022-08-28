import axios from "axios";

export const getTodoDatas = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
}