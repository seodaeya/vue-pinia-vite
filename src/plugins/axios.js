import axios from 'axios'
import { useTokenStore } from '@/stores/tokenStore'

axios.interceptors.request.use(
    (config) => {
        console.log('request---------------------------------')
        console.log(useTokenStore().token)
        const token = useTokenStore().token
        if (token) {
            config.headers.authorization = token
        }
        console.log(config)
        return config;
    },
    (error) => {
        // Do something with request error
        console.log('[interceptors] axios request error!')
        return Promise.reject(error);
    },
);

// Add a response interceptor
axios.interceptors.response.use(
    (response) => {
        console.log('response---------------------------------')
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        /** @TODO 인증실패 처리 방법 확정 후, 수정 필요 */
        // if (response && response.data && response.data.code === 401) {
        //   window.location.href("/login");
        // }
        if (response && response.headers && response.headers.authorization) {
            useTokenStore().setToken(response.headers.authorization)
        }
        console.log(useTokenStore().token)
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('[interceptors] axios response error!')
        for(let obj in error) {
            console.log(`${'key: ' + obj}`)
            console.log(error[obj])
        }
        console.log(error)
        /** @TODO 인증실패 처리 방법 확정 후, 수정 필요 */
        if (error && error.response && error.response.status === 401) {
            // window.location.href("/login")
            // location.href("/login")
            console.log('http status 401')
            // return Promise.
            /** @TODO Nuxt 3 function */
            // clearError({ redirect: '/login' })
        }
        return Promise.reject(error);
    },
);

export default axios;