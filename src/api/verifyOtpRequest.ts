import axiosClient from "./axios";
import { useMutation } from "@tanstack/react-query";

interface payloadState {
  otp: string;
  newPassword: string;
  confirmPassword: string;
}

const verifyOtpRequest = () => {
  return (
    useMutation((payload:payloadState) => {
      console.log(payload)
        const {otp, newPassword, confirmPassword} = payload;
        console.log(otp,newPassword,confirmPassword)
        console.log(otp, newPassword, confirmPassword)
        axiosClient.put(`/users/changePassword?otp=${otp}&newPassword=${newPassword}&confirmPassword=${confirmPassword}`)
    })
  )
}

export default verifyOtpRequest