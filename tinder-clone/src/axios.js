import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-2.herokuapp.com'
});

export default instance;