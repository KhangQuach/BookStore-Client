import axios from "axios";
//set default base url
axios.defaults.baseURL = "http://localhost:5173/"
//set default Authorization header
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
