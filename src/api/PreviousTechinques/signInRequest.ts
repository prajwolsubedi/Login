import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from '../../store/store';
import { setAuthenticationTokens, toggleLoggedIn } from '../../store/slices/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import axios from '../api/interceptors/axiosAuth';
type SingInRequestPayloadType = {
    email: string;
    password: string;
};

const signInRequest = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return useMutation((payload) => {
        return axios
            .post('/login', payload)
            .then((res) => {
                console.log('Response after sign in', res);
                dispatch(setAuthenticationTokens(res.data));
                dispatch(toggleLoggedIn(true));
                alert('LoggedIn Succesfully Sending to dashboard...');
                axios.defaults.headers.common['Authorization'] = `Bearer ${res.data}`;
                navigate('/dashboard');
            })
            .catch((err) => {
                alert('An error occured while submitting form');
                console.log(err);
            });
    });
};

/*
 {
            onSuccess: (res) => {
                console.log(res)
                alert('LoggedIn Succesfully Sending to dashboard..')
                navigate('/dashboard')
            },
            onError: (response) => {
                alert('An error occured while submiting the form');
                console.log(response);
            }
        });
*/

export default signInRequest;
