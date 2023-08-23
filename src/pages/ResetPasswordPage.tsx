import React from 'react';
import { Box } from '@mui/material';
import ForgetPassword from '../components/templates/ForgetPassword/ForgetPassword';
import { makeStyles } from '@mui/styles';
import VerifyOTP from '../components/templates/VerityOTP/VerifyOTP';
export interface IResetPassWordPageProps {}

const useStyles = makeStyles({
    container: {
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E9F2FF'
    }
});
const ResetPasswordPage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            {/* <ForgetPassword /> */}
            <VerifyOTP />
        </Box>
    );
};

export default ResetPasswordPage;







/*
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
