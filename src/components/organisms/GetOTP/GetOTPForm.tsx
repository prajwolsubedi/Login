import React from 'react';
import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import { FORGOT_PASSWORD_INITIAL_FORM_STATE, FORGOT_PASSWORD_VALIDATION_SCHEMA } from '../../../hooks/Form/useFormValidationSchema';
import PhoneInputWrapper from '../../atoms/FormsUI/PhoneInput/PhoneInputWrapper';
import { useAppDispatch } from '../../../store/store';
import { toggleGetOTP } from '../../../store/slices/resetPasswordSlice';
import SubmitButton from '../../atoms/FormsUI/FormSubmitButton/SubmitButton';
import { GetOTPRequest } from '../../../api/WithoutAuthToken/BeforeLoginRequest';
import { useMutation } from '@tanstack/react-query';

const GetOTPForm: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const { mutate } = useMutation(GetOTPRequest, {
        onSuccess: (response) => {
            console.log('otp response ------ ', response);
            alert('Get OTP Form submitted successfully');
            dispatch(toggleGetOTP());
        },
        onError: (response) => {
            alert('An error occured while sending otp to mobile.');
            console.log(response);
        }
    });
    const handleFormSubmit = (values, action) => {
        mutate({ phoneNumber: values.phoneNumber });
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
            {(props) => {
                const { isSubmitting, isValid } = props;
                return (
                    <Form>
                        <Grid container gap="28px">
                            <Grid item xs={12}>
                                <PhoneInputWrapper name="phoneNumber" label="Phone Number" />
                            </Grid>
                            <Grid item xs={12}>
                                <SubmitButton fullWidth submitting={isSubmitting} isValid={isValid}>
                                    Get OTP
                                </SubmitButton>
                            </Grid>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default GetOTPForm;
