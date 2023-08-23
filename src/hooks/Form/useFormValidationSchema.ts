import * as Yup from 'yup';

const PASSWORD_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const SIGN_IN_INITIAL_FORM_STATE = {
    email: '',
    password: '',
    keepLoggedIn: false
};

export const SIGN_IN_VALIDATION_SCHEMA = Yup.object().shape({
    email: Yup.string()
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email')
        .email('Invalid email')
        .required('Required'),
    password: Yup.string().matches(PASSWORD_REGEX, 'Please Enter a strong password').required()
});

export const SIGN_UP_INITIAL_FORM_STATE = {
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
    enterPassword: Yup.string().matches(PASSWORD_REGEX, 'Please Enter a strong password').required(),
    confirmPassword: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('enterPassword')], 'Your passwords do not match.'),
    termsOfService: Yup.boolean().oneOf([true], 'The terms and service must be accepted.')
});

export const FORGOT_PASSWORD_INITIAL_FORM_STATE = {
    phoneNumber1: '',
};

export const FORGOT_PASSWORD_VALIDATION_SCHEMA = Yup.object().shape({
    phoneNumber1: Yup.string().required('Required')
});

export const VERIFY_OTP_INITIAL_FORM_STATE = {
    password: '',
    confirmPassword: ''
};

export const VERIFY_OTP_VALIDATION_SCHEMA = Yup.object().shape({
    password: Yup.string().matches(PASSWORD_REGEX, 'Please Enter a strong password').required(),
    confirmPassword: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('password')], 'Your passwords do not match.')
});
