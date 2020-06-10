import axios from 'axios';
import cookies from 'js-cookie';

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE
})

request.interceptors.request.use(
    config => {
        const token = cookies.get('token')
        if (token) {
            config.headers = Object.assign({}, config.headers, {
                'X-Auth-Token': token
            })
        }

        return config
    },
    error => Promise.reject(error)
)

export default request;
