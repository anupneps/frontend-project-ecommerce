import axios from "axios";

const axiosInstance = axios.create({
    //baseURL: 'https://orderlyonclick.azurewebsites.net/api/v1/'
    baseURL: 'https://localhost:7064/api/v1/'
})

export default axiosInstance