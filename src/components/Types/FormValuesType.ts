export type SignUpFormValuesType = {
    email: string,
    name: string,
    enterPassword: string,
    confirmPassword: string,
    phoneNumber: string,
    termsOfService: boolean,
}

export type SignInFormValuesType = {
    email: string,
    password: string,
    keepLoggedIn: boolean,
}

export type VerityOTPFormValuesType = {
    otp: string,
    newPassword: string,
    confirmPassword: string,
}

export type ForgotPassFormValuesType = {
    phoneNumber: string;
}