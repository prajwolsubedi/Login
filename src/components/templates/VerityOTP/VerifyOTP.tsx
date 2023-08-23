import React from 'react';
import { Grid } from '@mui/material';
import VerifyOTPForm from '../../organisms/VerifyOTPForm';
import Heading from '../../atoms/FormsUI/Heading/Heading';

const VerifyOTP = () => {
    return (
        <Grid container sx={{ height: '671px', width: '482px', border: '2px solid black' }}>
            <Grid item xs={12} sx={{ height: '55px', display: 'flex', justifyContent: 'center' }}>
                <Heading />
            </Grid>
            <Grid item sx={{backgroundColor: "#ffffff", padding: "27.5px 33px;"}}>
                <VerifyOTPForm />
            </Grid>
        </Grid>
    );
};

export default VerifyOTP;
