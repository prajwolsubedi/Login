import { Grid } from '@mui/material';
import FormTopSection from '../../molecules/Form/FormTopSection';
import Heading from '../../atoms/FormsUI/Heading/Heading';
import SignUpForm from '../../organisms/SignUp/SignUpForm';

const SignUp = () => {
    // const { mutate } = signUpRequest();
    // const handleSubmit = (values, action) => {
    //     console.log('OnSubmit called');
    //     mutate(values, {
    //         onSuccess: () => {
    //             alert('Account Created Successfully.');
    //         },
    //         onError: (response) => {
    //             console.log(response)
    //             alert('An error occured while submiting the form');
    //         }
    //     });
    //     action.resetForm();
    // };

    return (
        <Grid
            container
            sx={{
                width: '480px'
            }}
        >
            <Grid item xs={12} sx={{ height: '15%', display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                <Heading />
            </Grid>

            <Grid
                item
                sx={{
                    height: '616px',
                    padding: '28.5px 33px',
                    backgroundColor: '#FFFFFF'
                }}
            >
                <Grid container gap="28px">
                    <Grid item xs={12} sx={{ height: '55px' }}>
                        <FormTopSection heading="Sign up" text="Don't have an account?" link="Sign in" />
                    </Grid>
                    <Grid item xs={12}>
                        <SignUpForm />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SignUp;
