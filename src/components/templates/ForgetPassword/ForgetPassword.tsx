import FormTopSection from '../../organisms/FormTopSection';
import { Grid, Typography } from '@mui/material';
import ForgotPasswordForm from '../../organisms/ForgotPasswordForm';
import Heading from '../../atoms/FormsUI/Heading/Heading';
import FormFooterSection from '../../molecules/FormFooterSection';
import { Link } from 'react-router-dom';
const ForgetPassword = () => {
    return (
        <Grid width="480px" height="450px" sx={{ gap: '60px' }}>
            <Grid item xs={12} sx={{ height: '54px', display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                <Heading />
            </Grid>
            <Grid item xs={12} sx={{ backgroundColor: '#FFFFFF' }}>
                <Grid container gap="28px" sx={{ padding: '27.5px 33px', width: '100%' }}>
                    <Grid item xs={11} sx={{ height: '73px' }}>
                        <FormTopSection heading="Reset your password" text="Enter the phone number associated with your account and we'll send you a code to reset your password." link="" />
                    </Grid>
                    <Grid item xs={12}>
                        <ForgotPasswordForm />
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/authenticate">
                            <FormFooterSection textAlign="left" color="#000">
                                Back
                            </FormFooterSection>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ForgetPassword;

/*


        <Box>
            <FormTopSection heading="Reset your password" text="Enter the phone number associated with your account and we'll send you a code to reset your password." link="" />
            <Formik
                initialValues={{ ...FORGOT_PASSWORD_INITIAL_FORM_STATE }}
                validationSchema={{ ...FORGOT_PASSWORD_VALIDATION_SCHEMA }}
                onSubmit={(values, action) => {
                    handleFormSubmit(values, action);
                    action.resetForm();
                }}
            >
                <Form>
                    <PhoneInputWrapper name="phoneNumber" label="Phone Number" />
                    <ButtonWrapper type="submit">Get OTP</ButtonWrapper>
                </Form>
            </Formik>
        </Box>

  <Formik
                  initialValues={{ ...SIGN_IN_INITIAL_FORM_STATE }}
                  validationSchema={SIGN_IN_VALIDATION_SCHEMA}
                  onSubmit={(values, action) => {
                    handleFormSubmit(values, action);
                    action.resetForm();
                  }}
                >
                  <Form>
                    <Grid
                      container
                      sx={{ display: 'flex', gap: '24px'}}
                    >
                      <Grid item xs={12} sx={{ height: '52px' }}>
                        <TextFieldWrapper height="52px" name="email" label="Email" />
                      </Grid>
                      <Grid item xs={12} sx={{ height: '52px' }}>
                        <TextFieldWrapper name="password" label="Password" />
                      </Grid>
                      <Grid item xs={12} sx={{ height: '32px'}}>
                        <CheckBoxWrapper name="keepLoggedIn" label="Keep me logged in" />
                      </Grid>
                      <Grid item xs={12} sx={{ height: '52px' }}>
                        <ButtonWrapper type="submit">Submit</ButtonWrapper>
                      </Grid>
                      <Grid item xs={12} sx={{ height: '27px' }}>
                        <SignInFooter />
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
*/
