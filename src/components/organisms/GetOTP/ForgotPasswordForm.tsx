import React from 'react';
import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import { FORGOT_PASSWORD_INITIAL_FORM_STATE, FORGOT_PASSWORD_VALIDATION_SCHEMA } from '../../../hooks/Form/useFormValidationSchema';
import PhoneInputWrapper from '../../atoms/FormsUI/PhoneInput/PhoneInputWrapper';
import ButtonWrapper from '../../atoms/FormsUI/Button/ButtonWrapper';
import { useAppDispatch } from '../../../store/store';
import { toggleGetOTP } from '../../../store/slices/resetPasswordSlice';
import getOtpRequest from '../../../api/PreviousTechinques/getOtpRequest';
// export interface IForgotPasswordForm(Props) {};

const ForgotPasswordForm: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    // const handleClick = () => {
    //     console.log('onClick outer button wrapper handleClick called..')
    //     dispatch(toggleGetOTP());

    // };

    const { mutate } = getOtpRequest();

    const handleFormSubmit = (values, action) => {
        console.log('get otp handleFormSubmit');
        console.log(values);
        mutate(values, {
            onSuccess: (response) => {
                console.log('values', values);
                console.log('response', response);
                alert('Get OTP Form submitted successfully');
                setTimeout(() => {
                    dispatch(toggleGetOTP());
                }, 500);
            },
            onError: (response) => {
                alert('An error occured while submiting the form');
                console.log(response);
            }
        });
        action.resetForm();
    };

    return (
        <Formik
            initialValues={{ ...FORGOT_PASSWORD_INITIAL_FORM_STATE }}
            validationSchema={FORGOT_PASSWORD_VALIDATION_SCHEMA}
            onSubmit={(values, action) => {
                handleFormSubmit(values, action);
            }}
        >
            <Form>
                <Grid container gap="28px">
                    <Grid item xs={12}>
                        <PhoneInputWrapper name="phoneNumber" label="Phone Number" />
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonWrapper type="submit">Get OTP</ButtonWrapper>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    );
};

export default ForgotPasswordForm;
