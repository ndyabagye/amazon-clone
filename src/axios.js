import axios from 'axios';

const instance = axios.create({
    // api cloud function url
    baseURL: 'https://us-central1-clone-66c2d.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/clone-66c2d/us-central1/api'
});

export default instance;