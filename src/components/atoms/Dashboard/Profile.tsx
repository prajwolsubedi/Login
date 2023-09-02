import React, { useState } from 'react';
import { Grid, Typography, SvgIcon, Box } from '@mui/material';
import { ReactComponent as Dropdown } from '../../../assets/dashboard/Dropdown.svg';
import { toggleLoggedIn } from '../../../store/slices/authenticationSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setAuthenticationTokens } from '../../../store/slices/authenticationSlice';
import { setCurrentUser } from '../../../store/slices/currentLoggedInUserSlice';

const Profile = () => {
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector((state) => state.currentLoggedInUser.userInfo);
    const [isDropdownActive, setDropdownActive] = useState<boolean>(false);
    const handleDropdownClick = () => {
        setDropdownActive(!isDropdownActive);
    };
    return (
        <Grid container width="200px" height="48px" sx={{ fontFamily: 'Poppins, sans-serif', borderRadius: '200px', padding: '4px', border: '1px solid var(--grey-def, #C8C8C8)' }}>
            <Grid item width="40px" height="40px" sx={{ backgroundColor: '#EBEBEB', borderRadius: '100%', marginRight: '12px' }}></Grid>
            <Grid item sx={{ marginRight: '8px' }}>
                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '16px', color: 'var(--primary-color, #456C97)' }}>{userInfo.name}</Typography>
                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '8px', color: 'var(--primary-color, #456C97)' }}>{userInfo.email}</Typography>
            </Grid>
            <Grid item width="13px" height="8px">
                <button onClick={handleDropdownClick} style={{ border: 'none', outline: 'none', background: 'none', cursor: 'pointer' }}>
                    <SvgIcon width="13px" height="8px" sx={{ marginTop: '15px' }} component={Dropdown} />
                </button>
            </Grid>
            {isDropdownActive && (
                <Box marginLeft="auto">
                    <button
                        onClick={() => {
                            dispatch(toggleLoggedIn(false));
                            dispatch(setCurrentUser({ id: null, email: null, phoneNumber: null, name: null }));
                            dispatch(setAuthenticationTokens({ accessToken: null, refreshToken: null }));
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        Log Out
                    </button>
                </Box>
            )}
        </Grid>
    );
};

export default Profile;
