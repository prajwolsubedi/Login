import axios from "axios";
export const getAllUsersInfo = async ({authToken}: string) => {
    return await axios.get('/usersWithAuth/getAllSignedUpUsers');
};


export const getLoggedInUserInfo = async ({authToken}: string) => {
    return await axios.get('/usersWithAuth/getLoginUserInfo');
};


export const refetchAuthTokens = async ({refreshToken}: string) => {
    return await axios.get("http://18.136.197.25:8080/refresh/token", {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      })
}