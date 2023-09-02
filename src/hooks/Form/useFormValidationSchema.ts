import * as Yup from 'yup';

const PASSWORD_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

import { SignUpFormValuesType, SignInFormValuesType, ForgotPassFormValuesType, VerityOTPFormValuesType } from '../../components/Types/FormValuesType';

export const SIGN_IN_INITIAL_FORM_STATE: SignInFormValuesType = {
    email: '',
    password: '',
    keepLoggedIn: false
};

export const SIGN_IN_VALIDATION_SCHEMA = Yup.object().shape({
    email: Yup.string()
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email')
        .email('Invalid email')
        .required('Required'),
    password: Yup.string().required()
});

export const SIGN_UP_INITIAL_FORM_STATE : SignUpFormValuesType = {
    email: '',
    name: '',
    phoneNumber: '',
    enterPassword: '',
    confirmPassword: '',
    termsOfService: false,
};

export const SIGN_UP_VALIDATION_SCHEMA = Yup.object().shape({
    email: Yup.string()
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email')
        .email('Invalid email')
        .required('Required'),
    name: Yup.string().min(2).max(25).required('Required'),
    phoneNumber: Yup.string().required('Required'),
    enterPassword: Yup.string().matches(PASSWORD_REGEX, 'Please Enter a strong password').required('Required'),
    confirmPassword: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('enterPassword')], 'Your passwords do not match.'),
    termsOfService: Yup.boolean().oneOf([true], 'The terms and service must be accepted.')
});

export const FORGOT_PASSWORD_INITIAL_FORM_STATE: ForgotPassFormValuesType = {
    phoneNumber: '',
};

export const FORGOT_PASSWORD_VALIDATION_SCHEMA = Yup.object().shape({
    phoneNumber: Yup.string().required('Required')
});

export const VERIFY_OTP_INITIAL_FORM_STATE: VerityOTPFormValuesType = {
    otp: '',
    newPassword: '',
    confirmPassword: ''
};

export const VERIFY_OTP_VALIDATION_SCHEMA = Yup.object().shape({
    otp: Yup.string().required('Enter the complete otp code.'),
    newPassword: Yup.string().matches(PASSWORD_REGEX, 'Please Enter a strong password').required('Please enter a password'),
    confirmPassword: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('newPassword')], 'Your passwords do not match.')
});
