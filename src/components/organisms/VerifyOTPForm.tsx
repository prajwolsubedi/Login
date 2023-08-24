import { Grid, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { Divider } from '@material-ui/core';
// import Heading from '../atoms/FormsUI/Heading/Heading';
import ButtonWrapper from '../atoms/FormsUI/Button/ButtonWrapper';
import TextFieldWrapper from '../atoms/FormsUI/TextField/TextFieldWrapper';
import { VERIFY_OTP_INITIAL_FORM_STATE, VERIFY_OTP_VALIDATION_SCHEMA } from '../../hooks/Form/useFormValidationSchema';
import FormTopSection from './FormTopSection';
import SingleLineTextStyle from '../atoms/SingleLineText/SingleLineTextStyle';
import FormFooterSection from '../molecules/FormFooterSection';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useState } from 'react';
import { toggleGetOTP } from '../../store/slices/resetPasswordSlice';
import { useAppDispatch } from '../../store/store';
import verifyOtpRequest from '../../api/verifyOtpRequest';
import { useFormikContext } from 'formik';
import { useField } from 'formik';
const VerifyOTPForm = () => {
    const dispatch = useAppDispatch();
    const [otp, setOtp] = useState<string>('');

    const handleOtpChange = (newvalue: string) => {
        console.log(newvalue);
        setOtp(newvalue);
    };

    const handleClick = () => {
        dispatch(toggleGetOTP());
    };
    const { mutate } = verifyOtpRequest();
    const handleSubmit = (values, action) => {
        console.log('values of verify otp', values);
        console.log('Verify OTP form submitted.');
        mutate(values, {
            onSuccess: () => {
                alert('Password Changed Successfully.');
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
                console.log('verifty otp ', values);
                handleSubmit(values, action);
            }}
        >
            {({ values, setFieldValue }) => (
                <Form>
                    <Grid container gap="28px">
                        <Grid item xs={12} height="55px">
                            <FormTopSection heading="Verify" text="Enter the OTP code we have sent via SMS" link="" />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiOtpInput
                                sx={{ height: '52px' }}
                                value={otp}
                                onChange={(newValue) => {
                                    console.log('new value of otp'), setOtp(newValue);
                                    setFieldValue('otp', newValue);
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Divider></Divider>
                        </Grid>

                        <Grid item xs={12} height="18px">
                            <SingleLineTextStyle text="Enter a password below to change your password" />
                        </Grid>

                        <Grid item xs={12}>
                            <TextFieldWrapper name="newPassword" label="New Password" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldWrapper name="confirmPassword" label="Confirm Password" />
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonWrapper type="submit">Set Password</ButtonWrapper>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', height: '28px' }}>
                            <button onClick={handleClick} style={{ backgroundColor: 'inherit', border: 'none' }}>
                                <FormFooterSection color="#000000" marginLeft="0" marginRight="0">
                                    Back
                                </FormFooterSection>
                            </button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default VerifyOTPForm;
