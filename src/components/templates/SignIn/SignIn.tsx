import { Grid, Divider } from '@mui/material';
import { Formik, Form } from 'formik';
import TextFieldWrapper from '../../atoms/FormsUI/TextField/TextFieldWrapper';
import CheckBoxWrapper from '../../organisms/CheckBoxWrapper';
import ButtonWrapper from '../../atoms/FormsUI/Button/ButtonWrapper';
import signUpRequestProcessor from '../../../api/signUpRequestProcessor';
import Heading from '../../atoms/FormsUI/Heading/Heading';
import { SIGN_IN_INITIAL_FORM_STATE } from '../../../hooks/Form/useFormValidationSchema';
import { SIGN_IN_VALIDATION_SCHEMA } from '../../../hooks/Form/useFormValidationSchema';
import FormTopSection from '../../organisms/FormTopSection';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';
import FormFooterSection from '../../molecules/FormFooterSection';
import { Link } from 'react-router-dom';

const GlobalStyle = styled('div')({
  fontFamily: "'Poppins', sans-serif",
});

const theme = createTheme();

const SignIn = () => {
  const { mutate } = signUpRequestProcessor();
  const handleFormSubmit = (values, action) => {
    console.log('Handle Submit called');
    console.log(values, action);
    mutate(values, {
      onSuccess: () => {
        alert('Signned In Successfully.');
      },
      onError: (response) => {
        alert('An error occured while submiting the form');
        console.log(response);
      },
    });
    action.resetForm();
  };
  return (
        <Grid
          container
          sx={{
            width: '480px',
            height: '554px',
            gap: '60px',
          }}
        >
          <Grid item xs={12} sx={{ height: '54px', display: 'flex', justifyContent: 'center' }}>
            <Heading />
          </Grid>

          <Grid
            item
            sx={{
              height: '440px',
              padding: '29px 33px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Grid container gap="28px">
              <Grid item sx={{ height: '54px' }}>
                <FormTopSection heading="Sign in" text="Don't have an account?" link="Sign up" />
              </Grid>
              <Grid item>
                <Formik
                  initialValues={{ ...SIGN_IN_INITIAL_FORM_STATE }}
                  validationSchema={SIGN_IN_VALIDATION_SCHEMA}
                  onSubmit={(values, action) => {
                    console.log(values)
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
                        <TextFieldWrapper name="password" label="Password" type= "password"/>
                      </Grid>
                      <Grid item xs={12} sx={{ height: '32px'}}>
                        <CheckBoxWrapper name="keepLoggedIn" label="Keep me logged in" />
                      </Grid>
                      <Grid item xs={12} sx={{ height: '52px' }}>
                        <ButtonWrapper type="submit">Submit</ButtonWrapper>
                      </Grid>
                      <Grid item xs={12} sx={{ height: '27px', display: 'flex', flexDirection: "column" }}>
                        <Divider />
                        <Link to="/forgotpassword">
                        <FormFooterSection textAlign="right" color="#0F6EFB" >Forgot Password</FormFooterSection>
                        </Link> 
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  );
};

export default SignIn;
