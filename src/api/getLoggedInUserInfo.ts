import { useMutation, useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../store/store';
import axios from 'axios';

import { ConfigAuthType } from './APITypes';

const getLoggedInUserInfo = () => {
    const accessToken = useAppSelector((state) => state.authentication.accessToken);
    const config: ConfigAuthType = {
        headers: { Authorization: 'Bearer ' + accessToken }
    };

    const fetchLoggedInUserInfo = async function () {
        return await axios.get('/usersWithAuth/getLoginUserInfo', config);
    };
    const result = useQuery(['LoggedInUser'], fetchLoggedInUserInfo, {
        enabled: false
    });
    console.log('getLoggedInUser Result', result);
    return result;
};

export default getLoggedInUserInfo;
