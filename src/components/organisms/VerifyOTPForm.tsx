import { Grid, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
// import Heading from '../atoms/FormsUI/Heading/Heading';
import ButtonWrapper from '../atoms/FormsUI/Button/ButtonWrapper';
import TextFieldWrapper from '../atoms/FormsUI/TextField/TextFieldWrapper';
import { VERIFY_OTP_INITIAL_FORM_STATE, VERIFY_OTP_VALIDATION_SCHEMA } from '../../hooks/Form/useFormValidationSchema';
import FormTopSection from './FormTopSection';
// import { MuiOtpInput } from 'mui-one-time-password-input';
// export interface IVerifyOTPForm(Props) {};
import signUpRequestProcessor from '../../api/signUpRequestProcessor';
const VerifyOTPForm = () => {
    const resultFromUseMutation = signUpRequestProcessor();
    console.log('resultFromUseMutation', resultFromUseMutation);
    const { mutate } = signUpRequestProcessor();
    console.log('mutate', mutate);
    const handleSubmit = (values, action) => {
        console.log('Verify OTP form submitted.');
        mutate(values, {
            onSuccess: () => {
                alert('Password Change Successfully.');
            },
            onError: (response) => {
                alert('An error occured while resetting password!');
                console.log(response);
            }
        });
        action.resetForm();
    };
    return (
        <Formik
            initialValues={{ ...VERIFY_OTP_INITIAL_FORM_STATE }}
            validationSchema={VERIFY_OTP_VALIDATION_SCHEMA}
            onSubmit={(values, action) => {
                console.log('On Submit called from verify otp.', values);
                handleSubmit(values, action);
                console.log(values);
            }}
        >
            <Form>
                <Grid container  gap="28px">
                    <Grid item xs={12} height="55px">
                    {/* <MuiOtpInput /> */}
                    <FormTopSection heading='Verify' text='Enter the OTP code we have sent via SMS' link='' />
                    </Grid>
                    <Grid item>
                    <Typography>Enter a password below to change your password</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWrapper name="password" label="New Password" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWrapper name="confirmPassword" label="Confirm Password" />
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonWrapper type="submit">Set Password</ButtonWrapper>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    );
};

export default VerifyOTPForm;
