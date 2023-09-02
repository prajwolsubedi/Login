
export type LoggedInUser = {
    id?: number;
    name?: string;
    email?: string;
    phoneNumber?: string;
  };

export type AuthTokensType = {
  refreshToken: string | null,
  accessToken: string | null,
}

export type GetAllSignedUpUserType = {
    accessToken: string,
}

export type LoggedInUserInfoType = {
    accessToken: string,
}

export type SignInRequestType = {
    email?: string,
    password?: string
  }

export type SingUpRequestType = {
    enterPassword?: string,
    confirmPassword?: string,
    phoneNumber?: string,
    name?: string,
    email?: string,
  }

export type GetOTPRequestType = {
    phoneNumber?: string;
  }

export type VerifyOTPType = {
    otp?: string;
    newPassword?: string;
    confirmPassword?: string;
}

export type ConfigAuthType = {
    headers: {
        Authorization: string;
    };
};