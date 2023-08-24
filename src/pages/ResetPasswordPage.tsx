import React from 'react';
import { Box } from '@mui/material';
import GetOTP from '../components/templates/GetOTP/GetOTP';
import { makeStyles } from '@mui/styles';
import VerifyOTP from '../components/templates/VerityOTP/VerifyOTP';
import { useAppSelector } from '../store/store';
export interface IResetPassWordPageProps {}


const useStyles = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9F2FF'
  }
});
const ResetPasswordPage = () => {
  const isGetOTP: boolean = useAppSelector((store) => store.resetPassword.isGetOTP);
    const classes = useStyles();
    return <Box className={classes.container}>{isGetOTP ? <GetOTP /> : <VerifyOTP />}</Box>;
};

export default ResetPasswordPage;

