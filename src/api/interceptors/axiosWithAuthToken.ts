import axios from 'axios';
const baseURL = 'http://18.136.197.25:8080';

import { AuthTokensType } from '../APITypes';

function getRefreshToken() {
    return JSON.parse(localStorage.getItem('refreshToken') as string);
}

function getAccessToken() {
    return JSON.parse(localStorage.getItem('accessToken') as string);
}

function setAuthTokens(values: AuthTokensType) {
    console.log('Values send in authtokens after refetching the access Token --> ', values);
    console.log('Settig accessToken values as ', values.accessToken);
    localStorage.setItem('accessToken', JSON.stringify(values.accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(values.refreshToken));
}

const axiosWithAuthToken = axios.create({
    baseURL
});

axiosWithAuthToken.interceptors.request.use(
    (config) => {
        console.log('Axios interceptors request runnedd accessToken values ->', getAccessToken());
        config.headers.Authorization = `Bearer ${getAccessToken()}`;
        return config;
    },
    (err) => {
        console.log('Axios interceptors request runnedd on error........');
        return Promise.reject(err);
    }
);

axiosWithAuthToken.interceptors.response.use(
    (res) => {
        console.log('Axios interceptors response runned on success......');
        return res;
    },
    async (error) => {
        console.log('Axios interceptors response runnedd on error........');
        const originalConfig = error.config;
        if (error.response.status === 401 && error.response.data) {
            console.log(error.response.data);
            return Promise.reject(error.response.data);
        }

        if (error.response.status === 403 && !originalConfig._retry) {
            originalConfig._retry = true;
            const refreshToken = getRefreshToken();
            console.log('accessToken after token has expired So Fetching new one -------', refreshToken);
            try {
                const response = await axios.get('http://18.136.197.25:8080/refresh/token', {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`
                    }
                });
                setAuthTokens(response.data);
                //Here the axiosWithAuthToken.interceptors.request.use will run if we retry our axios(originalConfig) so instead of setting the new accessToken here we jst update it's values the it will be set in the interceptor.request.use
                return await axios(originalConfig);
                //puting it to await runs the catch block once indication jwit expired error
            } catch (error) {
                console.log('error while fetching new access token', error);
                return Promise.reject(error);
            }
        }
        console.log(error);
        return Promise.reject(error);
    }
);

export default axiosWithAuthToken;
