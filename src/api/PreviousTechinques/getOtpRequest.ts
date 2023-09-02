import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

interface payloadState {
    phoneNumber: string;
}

const getOtpRequest = () => {
    return useMutation((payload: payloadState) => {
        const { phoneNumber } = payload;
        return axios.post(`/usersWithoutAuth/sendOtpToUser`, null, {
            params: {
                phoneNumber: phoneNumber
            }
        });
    });
};

export default getOtpRequest;
