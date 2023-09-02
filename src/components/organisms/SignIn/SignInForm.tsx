import { Formik, Form } from 'formik';
import { toggleLoggedIn } from '../../../store/slices/authenticationSlice';
import { setAuthenticationTokens } from '../../../store/slices/authenticationSlice';
import { Grid, Divider } from '@mui/material';
import FormFooterSection from '../../molecules/Form/FormFooterSection';
import { Link } from 'react-router-dom';
import InputField from '../../atoms/FormsUI/InputField/InputField';
import SubmitButton from '../../atoms/FormsUI/FormSubmitButton/SubmitButton';
import CheckBoxWrapper from '../../atoms/FormsUI/CheckBox/CheckBoxWrapper';
import { SIGN_IN_INITIAL_FORM_STATE, SIGN_IN_VALIDATION_SCHEMA } from '../../../hooks/Form/useFormValidationSchema';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useAppDispatch } from '../../../store/store';
import { SignInRequest } from '../../../api/WithoutAuthToken/BeforeLoginRequest';
import { getLoggedInUserInfo } from '../../../api/WithAuthToken/AfterLoginRequest';
import { setCurrentUser } from '../../../store/slices/currentLoggedInUserSlice';

const SignInForm = () => {
    const dispatch = useAppDispatch();
    const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);

    const { mutate } = useMutation(SignInRequest, {
        onSuccess: (res) => {
            alert('login SuccessFul');
            console.log('response after successfully logged in', res);
            dispatch(setAuthenticationTokens(res.data));
        },
        onError: (err) => {
            console.log(err);
            alert('Sing In Failed');
        }
    });

    const handleFormSubmit = (values, action) => {
        mutate({ ...values });
    };

    const fetchingValue = accessToken === null ? false : true;

    useQuery({
        queryKey: ['getLoggedInUserInfo'],
        queryFn: getLoggedInUserInfo,
        enabled: fetchingValue,
        onSuccess: (res) => {
            dispatch(setCurrentUser(res.data));
            dispatch(toggleLoggedIn(true));
            //doing this already navigate to dashboard in authentication page
        },
        onError: (err) => {
            alert('Failure in fetching the LoggedInUserInfo');
            console.log(err);
        }
    });

    return (
        <Formik
            initialValues={{ ...SIGN_IN_INITIAL_FORM_STATE }}
            validationSchema={SIGN_IN_VALIDATION_SCHEMA}
            onSubmit={(values, action) => {
                action.resetForm();
                handleFormSubmit(values, action);
            }}
        >
            {(props) => {
                const { handleChange, handleBlur, isValid, isSubmitting, touched, errors } = props;
                return (
                    <Form>
                        <Grid container sx={{ display: 'flex', gap: '24px' }}>
                            <Grid item xs={12} sx={{ height: '52px' }}>
                                <InputField
                                    name="email"
                                    label="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="off"
                                    touched={touched.email}
                                    errorMessage={errors.email}
                                    error={touched.email && errors.email ? true : false}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ height: '52px' }}>
                                <InputField
                                    name="password"
                                    label="Password"
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="off"
                                    touched={touched.password}
                                    errorMessage={errors.password}
                                    error={touched.password && errors.password ? true : false}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ height: '18px' }}>
                                <CheckBoxWrapper name="keepLoggedIn" label="Keep me logged in" />
                            </Grid>
                            <Grid item xs={12} sx={{ height: '52px' }}>
                                <SubmitButton isValid={isValid} submitting={isSubmitting} fullWidth>
                                    Submit
                                </SubmitButton>
                            </Grid>
                            <Grid item xs={12} sx={{ height: '27px', display: 'flex', flexDirection: 'column' }}>
                                <Divider />
                                <FormFooterSection color="#0F6EFB" marginLeft="auto" marginRight="0">
                                    <Link to="/forgotpassword" style={{ color: 'inherit' }}>
                                        Forgot Password
                                    </Link>
                                </FormFooterSection>
                            </Grid>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default SignInForm;
