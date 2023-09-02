import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import { Divider } from '@material-ui/core';
import { VERIFY_OTP_VALIDATION_SCHEMA, VERIFY_OTP_INITIAL_FORM_STATE } from '../../../hooks/Form/useFormValidationSchema';
import FormTopSection from '../../molecules/Form/FormTopSection';
import SingleLineTextStyle from '../../atoms/SingleLineText/SingleLineTextStyle';
import FormFooterSection from '../../molecules/Form/FormFooterSection';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useState } from 'react';
import { toggleGetOTP } from '../../../store/slices/resetPasswordSlice';
import { useAppDispatch } from '../../../store/store';
import InputField from '../../atoms/FormsUI/InputField/InputField';
import SubmitButton from '../../atoms/FormsUI/FormSubmitButton/SubmitButton';
import { verifyOTPRequest } from '../../../api/WithoutAuthToken/BeforeLoginRequest';
import { useMutation } from '@tanstack/react-query';
const VerifyOTPForm = () => {
    const dispatch = useAppDispatch();
    const [otp, setOtp] = useState<string>('');

    const handleClick = () => {
        dispatch(toggleGetOTP());
    };
    const {mutate} = useMutation(verifyOTPRequest, {
        onSuccess: (res) => {
            alert('Password Changed Successfully.');
            console.log('verify otp response', res)
        },
        onError: (err) => {
            alert('An error occured while resetting password!');
            console.log(err);
        }
    })
    const handleSubmit = (values, action) => {
        mutate({...values});
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
            {(props) => {
                const { isSubmitting, isValid, handleBlur, handleChange, touched, errors, setFieldValue } = props;
                return (
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
                                <InputField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    touched={touched.newPassword}
                                    errorMessage={errors.newPassword}
                                    error={touched && errors.newPassword ? true : false}
                                    name="newPassword"
                                    label="New Password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    touched={touched.confirmPassword}
                                    errorMessage={errors.confirmPassword}
                                    error={touched && errors.confirmPassword ? true : false}
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SubmitButton fullWidth submitting={isSubmitting} isValid={isValid}>
                                    Set Password
                                </SubmitButton>
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
                );
            }}
        </Formik>
    );
};

export default VerifyOTPForm;
