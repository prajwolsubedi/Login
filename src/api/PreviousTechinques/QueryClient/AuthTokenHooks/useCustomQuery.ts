import { useQuery } from '@tanstack/react-query';
import { getAccessToken, getRefreshToken } from '../../../interceptors/axiosWithAuthToken';
import { refetchAuthTokens } from '../AfterLogin/RequestWithAuth';

type ChangeToken = {
    accessToken: string;
    refreshToken: string;
};

useQuery<ChangeToken>({
    queryKey: ['refreshToken'],
    queryFn: () => refetchAuthTokens({ refreshToken: getRefreshToken() }).then((res) => res.data),
    enabled: false,
    onSuccess: (res) => {
        console.log(res);
        localStorage.setItem('accessToken', res.accessToken as string);
        localStorage.setItem('refreshToken', res.refreshToken as string);
        userRefetch();
    }
});
