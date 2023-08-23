import React from 'react';
import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import signUpRequestProcessor from '../../api/signUpRequestProcessor';
import { FORGOT_PASSWORD_INITIAL_FORM_STATE, FORGOT_PASSWORD_VALIDATION_SCHEMA } from '../../hooks/Form/useFormValidationSchema';
import PhoneInputWrapper from './PhoneInputWrapper';
import ButtonWrapper from '../atoms/FormsUI/Button/ButtonWrapper';
// export interface IForgotPasswordForm(Props) {};

const ForgotPasswordForm: React.FunctionComponent = () => {
    const { mutate } = signUpRequestProcessor();

    const handleFormSubmit = (values, action) => {
        console.log('OnSubmit called');
        mutate(values, {
            onSuccess: () => {
                alert('Form submitted successfully');
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
                action.resetForm();
            }}
        >
            <Form>
                <Grid container gap="28px">
                    <Grid item xs={12}>
                        <PhoneInputWrapper name="phoneNumber1" label="Phone Number" />
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
