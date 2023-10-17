import axios from 'axios';


import { SingUpRequestType, SignInRequestType, VerifyOTPType, GetOTPRequestType } from '../APITypes';

export const SignInRequest = async ({ email, password }: SignInRequestType) => {
    return await axios.post('http://enterTheURLHere', {
        email,
        password
    });
};

export const SingUpRequest = async ({ email, name, enterPassword, confirmPassword, phoneNumber }: SingUpRequestType) => {
    return await axios.post('http://', {
        email,
        name,
        enterPassword,
        confirmPassword,
        phoneNumber
    });
};

export const GetOTPRequest = async ({ phoneNumber }: GetOTPRequestType) => {
    return await axios.post("http://", null, {
      params: {
        phoneNumber,
      },
    });
  };
  



export const verifyOTPRequest = async ({ otp, newPassword, confirmPassword }: VerifyOTPType) => {
    return await axios.put('http://18.136.197.25:8080/usersWithoutAuth/changePassword', null, {
        params: {
            otp,
            newPassword,
            confirmPassword
        }
    });
};
