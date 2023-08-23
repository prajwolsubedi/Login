import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import TextFieldWrapper from '../../atoms/FormsUI/TextField/TextFieldWrapper';
import CheckBoxWrapper from '../../organisms/CheckBoxWrapper';
import ButtonWrapper from '../../atoms/FormsUI/Button/ButtonWrapper';
import PhoneInputWrapper from '../../organisms/PhoneInputWrapper';
import signUpRequestProcessor from '../../../api/signUpRequestProcessor';
import FormTopSection from '../../organisms/FormTopSection';
import Heading from '../../atoms/FormsUI/Heading/Heading';
import { SIGN_UP_VALIDATION_SCHEMA } from '../../../hooks/Form/useFormValidationSchema';
import { SIGN_UP_INITIAL_FORM_STATE } from '../../../hooks/Form/useFormValidationSchema';

const SignUp = () => {
    const { mutate } = signUpRequestProcessor();
    const handleSubmit = (values, action) => {
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
                        <Formik
                            initialValues={{ ...SIGN_UP_INITIAL_FORM_STATE }}
                            validationSchema={SIGN_UP_VALIDATION_SCHEMA}
                            onSubmit={(values, action) => {
                                console.log(values);
                                handleSubmit(values, action);
                            }}
                        >
                            <Form>
                                <Grid container gap="24px">
                                    <Grid item xs={12} sx={{ height: '50px' }}>
                                        <TextFieldWrapper name="email" label="Email" />
                                    </Grid>
                                    <Grid item xs={12} sx={{ height: '50px' }}>
                                        <TextFieldWrapper name="name" label="Username" />
                                    </Grid>
                                    <Grid item xs={12} sx={{ height: '50px' }}>
                                        <PhoneInputWrapper name="phoneNumber" label="Phone Number" />
                                    </Grid>
                                    <Grid item xs={12} sx={{ height: '50px' }}>
                                        <TextFieldWrapper  name="enterPassword" label="Password" />
                                    </Grid>
                                    <Grid item xs={12} sx={{ height: '50px' }}>
                                        <TextFieldWrapper name="confirmPassword" label="Confirm Password" />
                                    </Grid>
                                    <Grid item xs={12} sx={{ height: '42px' }}>
                                        <CheckBoxWrapper name="termsOfService" label="Accept terms and conditions" />
                                    </Grid>
                                    <Grid item xs={12} sx={{ height: '50px' }}>
                                        <ButtonWrapper type="submit">Sign Up</ButtonWrapper>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        //  <Grid
        //   item
        //   sx={{
        //     height: '85%',
        //     padding: '29px 33px',
        //     backgroundColor: '#FFFFFF',
        //   }}
        // >
        //   <Formik
        //     initialValues={{ ...SIGN_UP_INITIAL_FORM_STATE }}
        //     validationSchema={SIGN_UP_VALIDATION_SCHEMA}
        //     onSubmit={handleSubmit}
        //   >
        //     <Form>
        //       <Grid container gap={3}>
        //         <Grid item xs={12} sx={{ height: '40px' }}>
        //           <FormTopSection heading="Sign up" text="Don't have an account?" link="Sign in" />
        //         </Grid>

        //         <Grid item xs={12} sx={{ height: '40px' }}>
        //           <TextFieldWrapper name="email" label="Email" />
        //         </Grid>
        //         <Grid item xs={12} sx={{ height: '40px' }}>
        //           <TextFieldWrapper name="userName" label="Username" />
        //         </Grid>
        //         <Grid item xs={12} sx={{ height: '40px' }}>
        //           <PhoneInputWrapper name="phoneNumber" label="Phone Number" />
        //         </Grid>
        //         <Grid item xs={12} sx={{ height: '40px' }}>
        //           <TextFieldWrapper name="password" label="Password" />
        //         </Grid>
        //         <Grid item xs={12} sx={{ height: '40px' }}>
        //           <TextFieldWrapper name="confirmPassword" label="Confirm Password" />
        //         </Grid>

        //         <Grid item xs={12}>
        //           <CheckBoxWrapper name="termsOfService" label="Accept terms and conditions" />
        //         </Grid>

        //         <Grid item xs={12}>
        //           <ButtonWrapper type="submit">Sign Up</ButtonWrapper>
        //         </Grid>
        //       </Grid>
        //     </Form>
        //   </Formik>
        // </Grid>
    );
};

export default SignUp;
