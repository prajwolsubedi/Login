import axios from 'axios';

import { SingUpRequestType, SignInRequestType, VerifyOTPType, GetOTPRequestType } from '../../../APITypes';

export const SignInRequest = async ({ email, password }: SignInRequestType) => {
    console.log(email, password);
    return await axios.post('/login', {
        email,
        password
    });
};

export const SingUpRequest = async ({ email, name, enterPassword, confirmPassword, phoneNumber }: SingUpRequestType) => {
    return await axios.post('/usersWithoutAuth/signUpUser', {
        email,
        name,
        enterPassword,
        confirmPassword,
        phoneNumber
    });
};

export const GetOTPRequest = async ({ phoneNumber }: GetOTPRequestType) => {
    return await axios.post('/usersWithoutAuth/sendOtpToUser', null, {
        params: {
            phoneNumber
        }
    });
};

export const verifyOTPRequest = async ({ otp, newPassword, confirmPassword }: VerifyOTPType) => {
    return await axios.put('/usersWithoutAuth/changePassword', null, {
        params: {
            otp,
            newPassword,
            confirmPassword
        }
    });
};
