import axios from 'axios';

const instance = axios.create({
    // api cloud function url
    baseURL: '...'
});

export default instance;