// import axios from 'axios';
// import { useAppSelector, useAppDispatch } from '../store/store';
// import axiosClient from './axios';
// import { setAuthenticationTokens } from '../store/slices/authenticationSlice';
// const baseURL = 'http://18.136.197.25:8080';
// // const dispatch = useAppDispatch();
// // const accessTokenStore = useAppSelector((state) => state.authentication.authToken);
// // const refreshToken = useAppSelector((state) => state.authentication.refreshToken);
// // const accessToken = localStorage.getItem('accessToken') !== null && undefined ? JSON.parse(localStorage.getItem('accessToken') as string) : '';
// const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
// const refreshToken = JSON.parse(localStorage.getItem('refreshToken') as string);
// // console.log(accessToken)
// // console.log(refreshToken)



// const axiosWithAuth = axios.create({
//     baseURL,
//     headers: {
//         Authorization: `Bearer ${accessToken}`
//     }
// });

// axiosWithAuth.interceptors.request.use(
//     (config) => {
//         // console.log('config from axiosWithAuth.interceptors.request', config);
//         return config;
//     },
//     (error) => {
//         console.log('axiosWithAuth.reques Error', error);
//         return Promise.reject(error);
//     }
//     );
    
//     axiosWithAuth.interceptors.response.use(
//         (response) => {
//             console.log(response);
//             return response;
//         },
//         (error) => {
//             console.log(error)
//             console.log('axiosWithAuth.interceptors.response', error.response.status);
            
//             if(error.response.status === 403){
//                 axiosClient.get('/refresh/token', {
//                     headers: {Authorization: "Bearer " + refreshToken}
//                 }).then((res) => console.log('Response from New Auth Token', res)).catch((err) => console.log('Error from newAuthToken', err))
//             }
//         return Promise.reject(error);
//     }
// );

// // axiosWithAuth.interceptors.response.use(())

// // req.headers.Authorization = `Bearer ${accessToken}`;

// // // if(expired)
// // const response = await axiosClient.get('/refresh/token', {
// //     headers: {
// //         Authorization: `Bearer ${refreshToken}`
// //     }
// // });

// // dispatch(setAuthenticationTokens(response.data));
// // return req;

// export default axiosWithAuth;
