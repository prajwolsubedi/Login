import Table from '../components/atoms/table/Table';
import DashboardHeadingTemplate from '../components/templates/DashboardTemplate/DashboardHeadingTemplate';
import { Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getAllUsersInfo } from '../api/WithAuthToken/AfterLoginRequest';
// import axios from '../api/interceptors/axiosAuth';
import { setAllUsers } from '../store/slices/allUsersSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setAuthenticationTokens, toggleLoggedIn } from '../store/slices/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
    const isLoggedIn = useAppSelector((state) => state.authentication.isLoggedIn);
    const dispatch = useAppDispatch();

    const { data, isSuccess, isError, isLoading } = useQuery({
        queryKey: ['allSignedInUserInfo'],
        queryFn: getAllUsersInfo,
        refetchOnWindowFocus: false,
        enabled: isLoggedIn,
        onSuccess: (res) => {
            dispatch(setAllUsers(res.data));
        }
    });

    // useEffect(() => {
    //     if (isError) {
    //         dispatch(setAuthenticationTokens({ accessToken: null, refresToken: null }));
    //         dispatch(toggleLoggedIn(false));
    //     }
    // }, [isError]);

    if (isLoading) {
        return (
            <Grid item xs={12}>
                <DashboardHeadingTemplate />
                <Typography>Loading....</Typography>
            </Grid>
        );
    }

    if (isError) {
        return (
            <Grid item xs={12}>
                <DashboardHeadingTemplate />
                <Typography>Error while fetching the allUserData</Typography>
            </Grid>
        );
    }

    if (isSuccess) {
        return (
            <Grid container width="100%">
                <Grid item xs={12}>
                    <DashboardHeadingTemplate />
                </Grid>
                {!isError && !isLoading && <Table />}
            </Grid>
        );
    }
};

export default Dashboard;
