import FormTopSection from '../../molecules/Form/FormTopSection';
import { Grid, Typography } from '@mui/material';
import ForgotPasswordForm from '../../organisms/GetOTP/ForgotPasswordForm';
import Heading from '../../atoms/FormsUI/Heading/Heading';
import FormFooterSection from '../../molecules/Form/FormFooterSection';
import { Link } from 'react-router-dom';
import GetOTPForm from '../../organisms/GetOTP/GetOTPForm';
const GetOTP = () => {
    return (
        <Grid width="480px" height="450px" sx={{ gap: '60px' }}>
            <Grid item xs={12} sx={{ height: '54px', display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                <Heading />
            </Grid>
            <Grid item xs={12} sx={{ backgroundColor: '#FFFFFF' }}>
                <Grid container gap="28px" sx={{ padding: '27.5px 33px', width: '100%' }}>
                    <Grid item xs={11} sx={{ height: '73px' }}>
                        <FormTopSection heading="Reset your password" text="Enter the phone number associated with your account and we'll send you a code to reset your password." link="" />
                    </Grid>
                    <Grid item xs={12}>
                        <GetOTPForm />
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/authenticate">
                            <FormFooterSection color="#000" marginLeft="0" marginRight="0">
                                Back
                            </FormFooterSection>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default GetOTP;
