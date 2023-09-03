import { Grid } from '@mui/material';
import InputField from '../../atoms/FormsUI/InputField/InputField';
import SubmitButton from '../../atoms/FormsUI/FormSubmitButton/SubmitButton';
import { Formik, Form } from 'formik';
import { SIGN_UP_VALIDATION_SCHEMA } from '../../../hooks/Form/useFormValidationSchema';
import { SIGN_UP_INITIAL_FORM_STATE } from '../../../hooks/Form/useFormValidationSchema';
import CheckBoxWrapper from '../../atoms/FormsUI/CheckBox/CheckBoxWrapper';
import { SingUpRequest } from '../../../api/WithoutAuthToken/BeforeLoginRequest';
import PhoneInputWrapper from '../../atoms/FormsUI/PhoneInput/PhoneInputWrapper';
import { useMutation } from '@tanstack/react-query';
const SignUpForm = () => {
    const { mutate, isLoading } = useMutation(SingUpRequest, {
        onSuccess: (response) => {
            console.log(response);
            alert('Account Created Successfully.');
        },
        onError: (err) => {
            console.log(err);
            alert('An error occured while submiting the form');
        }
    });
    const handleSubmit = (values, action) => {
        console.log('OnSubmit called');
        mutate({ ...values });
    };

    return (
        <Formik
            initialValues={{ ...SIGN_UP_INITIAL_FORM_STATE }}
            validationSchema={SIGN_UP_VALIDATION_SCHEMA}
            onSubmit={(values, action) => {
                console.log(values);
                handleSubmit(values, action);
                action.resetForm();
            }}
        >
            {(props) => {
                const { values, handleChange, handleBlur, isValid, handleSubmit, isSubmitting, submitCount, touched, handleReset, errors, dirty } = props;
                return (
                    <Form>
                        <Grid container gap="24px">
                            <Grid item xs={12} sx={{ height: '50px' }}>
                                <InputField
                                    name="email"
                                    label="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.email && errors.email ? true : false}
                                    errorMessage={errors.email}
                                    touched={touched.email}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ height: '50px' }}>
                                <InputField
                                    name="name"
                                    label="Username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.name && errors.name ? true : false}
                                    errorMessage={errors.name}
                                    touched={touched.name}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ height: '50px' }}>
                                <PhoneInputWrapper name="phoneNumber" label="Phone Number" />
                            </Grid>
                            <Grid item xs={12} sx={{ height: '50px' }}>
                                <InputField
                                    name="enterPassword"
                                    label="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.enterPassword && errors.enterPassword ? true : false}
                                    errorMessage={errors.enterPassword}
                                    touched={touched.enterPassword}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ height: '50px' }}>
                                <InputField
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    onChange={handleChange}
                                    fullWidth
                                    onBlur={handleBlur}
                                    error={touched.confirmPassword && errors.confirmPassword ? true : false}
                                    errorMessage={errors.confirmPassword}
                                    touched={touched.confirmPassword}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ height: '18px' }}>
                                <CheckBoxWrapper name="termsOfService" onChange={handleChange} onBlur={handleBlur} fullWidth label="Accept terms and conditions" />
                            </Grid>
                            <Grid item xs={12} sx={{ height: '50px' }}>
                                <SubmitButton isLoading={isLoading} vairant="outlined" color="primary" fullWidth isValid={isValid} submitting={isSubmitting}>
                                    Sign Up
                                </SubmitButton>
                            </Grid>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default SignUpForm;
