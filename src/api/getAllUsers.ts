import axiosClient from './axios';
import { useMutation } from '@tanstack/react-query';

// interface payloadState{
//   phoneNumber:string;
// }

// http://18.136.197.25:8080/users/sendOtpToUser

// let config = {
//     headers: {
//       'Authorization': 'Bearer ' + validToken()
//     }
//   }
import { useAppSelector } from '../store/store';

const getAllUsers = () => {
    const authToken = useAppSelector((state) => state.authentication.authToken);
    return useMutation(() => {
        // console.log(authToken);
        const config = {
            headers: { 'Authorization':'Bearer ' + authToken }
        };
        return axiosClient
            .get(`/getAllSignedUpUsers`, config)
            .then((res) => console.log('get All SignedUP users response => Successfuly all users data fetched response =>', res))
            .catch((err) => console.log(err));
    });
};

export default getAllUsers;
