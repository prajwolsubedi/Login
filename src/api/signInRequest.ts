import axiosClient from './axios';

import { useMutation } from '@tanstack/react-query';
const signInRequest = () => {
    return useMutation((payload) => {
        console.log('singinPayload', payload)
        return axiosClient.post('/login', payload);
    });
};

export default signInRequest;
