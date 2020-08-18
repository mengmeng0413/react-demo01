import Axios from 'axios';
import qs from 'qs';
const axios = Axios.create();
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use((config) => {

    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
});

axios.interceptors.response.use(
    (response) => {
        let data = response.data;
        response.data = data.data;
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axios;