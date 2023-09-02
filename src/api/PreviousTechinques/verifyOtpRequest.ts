import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

import { VerityOTPFormValuesType } from '../../components/Types/FormValuesType';

const verifyOtpRequest = () => {
    return useMutation((payload: VerityOTPFormValuesType) => {
        console.log(payload);
        const { otp, newPassword, confirmPassword } = payload;
        return axios.put(`/usersWithoutAuth/changePassword?otp=${otp}&newPassword=${newPassword}&confirmPassword=${confirmPassword}`);
    });
};

export default verifyOtpRequest;
