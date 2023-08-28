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

import { useAppSelector, useAppDispatch } from '../store/store';
import { setAllUsers } from '../store/slices/allUsersSlice';

const getAllUsers = () => {
    const dispatch = useAppDispatch();
    const authToken = useAppSelector((state) => state.authentication.authToken);
    return useMutation(() => {
        // console.log(authToken);
        const config = {
            headers: { Authorization: 'Bearer ' + authToken }
        };
        return axiosClient
            .get(`/usersWithAuth/getAllSignedUpUsers`, config)
            .then((res) => {
                return dispatch(setAllUsers(res.data));
            })
            .catch((err) => console.log(err));
    });
};

export default getAllUsers;
