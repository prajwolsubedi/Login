import axiosWithAuthToken from '../interceptors/axiosWithAuthToken';

export const getAllUsersInfo = async () => {
    return await axiosWithAuthToken.get('/usersWithAuth/getAllSignedUpUsers');
};

export const getLoggedInUserInfo = async () => {
    return await axiosWithAuthToken.get('/usersWithAuth/getLoginUserInfo');
};
