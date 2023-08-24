import axiosClient from "./axios";
import { useMutation } from "@tanstack/react-query";

interface payloadState{
  phoneNumber:string;
}

// http://18.136.197.25:8080/users/sendOtpToUser
const getOtpRequest = () => {
  return useMutation((payload:payloadState) => {
    const {phoneNumber} = payload;
    console.log(phoneNumber)
     return axiosClient.post(`/users/sendOtpToUser?phoneNumber=${phoneNumber}`)
  })
}

export default getOtpRequest;