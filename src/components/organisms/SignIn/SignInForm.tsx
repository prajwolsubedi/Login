import { Formik, Form, ErrorMessage, useFormikContext } from 'formik';
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
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { SignInRequest } from '../../../api/WithoutAuthToken/BeforeLoginRequest';
import { getLoggedInUserInfo } from '../../../api/WithAuthToken/AfterLoginRequest';
import { setCurrentUser } from '../../../store/slices/currentLoggedInUserSlice';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { SignInFormValuesType } from '../../Types/FormValuesType';

const SignInForm = () => {
    useEffect(() => {
        return () => {
            setSignedIn(false);
        };
    }, []);
    const [signedIn, setSignedIn] = useState<boolean>(false);
    const [signInLoading, setSignInLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector((state) => state.authentication.accessToken);

    /*
    const handleFormSubmit = (values: SignInFormValuesType, setFieldError: (field: string, message: string | undefined) => void, setErrors) => {
        mutate(
            { ...values },
            {
                onSuccess: (res) => {
                    dispatch(setAuthenticationTokens(res.data));
                },
                onError: (err) => {
                    if (isAxiosError(err)) {
                        console.log(err.response?.data.message);
                        if (err.response?.status === 400) {
                            setFieldError('password', err.response?.data.message);
                            console.log(err.response?.data.message);
                        } else if (err.response?.status === 401) {
                            setFieldError('email', err.response?.data.message);
                            console.log(err.response?.data.message);
                        }
                    }
                    console.log(err);
                }
            }
        );
    };
    */

    const { mutate } = useMutation(SignInRequest);

    const handleFormSubmit = (values: SignInFormValuesType, setFieldError: (field: string, errorMsg: string) => void) => {
        mutate(
            { ...values },
            {
                onSuccess: (res) => {
                    dispatch(setAuthenticationTokens(res.data));
                },
                onError: (err) => {
                    if (isAxiosError(err)) {
                        if (err.response?.status === 400) {
                            console.log(err.response.data.message);
                            setFieldError('password', err.response.data.message);
                        } else if (err.response?.status === 401) {
                            setFieldError('email', err.response.data.message);
                        }
                    }
                    console.log(err);
                    setSignInLoading(false);
                    alert('Sing In Failed');
                }
            }
        );
    };

    useQuery({
        queryKey: ['getLoggedInUserInfo'],
        queryFn: getLoggedInUserInfo,
        enabled: accessToken === null ? false : true,
        onSuccess: (res) => {
            setSignedIn(true);
            setSignInLoading(false);
            setTimeout(() => {
                dispatch(setCurrentUser(res.data));
                dispatch(toggleLoggedIn(true));
            }, 300);
            // alert('login SuccessFul');
            //doing this already navigate to dashboard in authentication page
        },
        onError: (err) => {
            console.log(err);
            setSignInLoading(false);
        }
    });

    return (
        <Formik
            initialValues={{ ...SIGN_IN_INITIAL_FORM_STATE }}
            validationSchema={SIGN_IN_VALIDATION_SCHEMA}
            onSubmit={(values, { setFieldError }) => {
                handleFormSubmit(values, setFieldError);
                setSignInLoading(true);
            }}
        >
            {(props) => {
                const { handleChange, handleBlur, touched, errors } = props;
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
                                <SubmitButton isLoading={signInLoading} isSuccess={signedIn} successText="Signed In" fullWidth>
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
