import axios from 'axios';

export default axios.create({
    baseURL: 'https://server-for-todo.herokuapp.com/'
})
