import axiosClient from "./axios";
import { useMutation } from "@tanstack/react-query";

interface payloadState{
  phoneNumber:string;
}

const getOtpRequest = () => {
  return useMutation((payload:payloadState) => {
    const {phoneNumber} = payload;
    console.log(phoneNumber)
     return axiosClient.post(`/usersWithoutAuth/sendOtpToUser?phoneNumber=${phoneNumber}`)
  })
}

export default getOtpRequest;