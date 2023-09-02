import { Grid } from '@mui/material';
import Heading from '../../atoms/FormsUI/Heading/Heading';
import FormTopSection from '../../molecules/Form/FormTopSection';
import SignInForm from '../../organisms/SignIn/SignInForm';
const SignIn = () => {
    return (
        <Grid
            container
            sx={{
                width: '480px',
                height: '554px',
                gap: '60px'
            }}
        >
            <Grid item xs={12} sx={{ height: '54px', display: 'flex', justifyContent: 'center' }}>
                <Heading />
            </Grid>

            <Grid
                item
                sx={{
                    height: '440px',
                    padding: '29px 33px',
                    backgroundColor: '#FFFFFF'
                }}
            >
                <Grid container gap="28px">
                    <Grid item sx={{ height: '54px' }}>
                        <FormTopSection heading="Sign in" text="Don't have an account?" link="Sign up" />
                    </Grid>
                    <Grid item>
                        <SignInForm />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SignIn;
