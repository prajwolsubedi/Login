// import { useQuery, useMutation, useQueryClient } from "react-query";

// export function signUpRequestProcessor() {
//   const queryClient = useQueryClient();

//   function query(key, queryFunction, options = {}) {
//     return useQuery({
//       queryKey: key,
//       queryFn: queryFunction,
//       ...options,
//     });
//   }

//   function mutate(key, mutationFunction, options = {}) {
//     return useMutation({
//       mutationKey: key,
//       mutationFn: mutationFunction,
//       onSettled: () => queryClient.invalidateQueries(key),
//       ...options,
//     });
//   }

//   return { query, mutate, queryClient };
// }

import axios from 'axios';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

interface SignUpFormData {
    email: string;
    name: string;
    phoneNumber: string;
    enterPassword: string;
    confirmPassword: string;
    termsOfService: boolean;
}

// type SignUpMutation = UseMutationResult<unknown, Error, SignUpFormData, unknown>;

const signUpRequestProcessor = () => {
    return useMutation((formPayload) => {
        console.log(formPayload);
        return axios.post('http://18.136.197.25:8080/users/signUpUser', formPayload);
    });
};

// const { termsOfService, ...dataToSubmit } = formPayload;
// try {
//   console.log(formPayload);

//   const response = await axios.post(
//     "http://localhost:3000/users",
//     formPayload
//   );

//   return response.data; // Assuming the server responds with data upon success
// } catch (error) {
//   throw error; // Re-throw the error for React Query to handle
// }

// const signUp = async (formPayload) => {
//   try {
//     const response = await axiosClient.post("", formPayload);
//     // Handle the response here
//     return response.data; // Return any data you need from the response
//   } catch (error) {
//     // Handle errors here
//     throw error; // You can re-throw the error or handle it as needed
//   }
// };

/*
const signUpRequestProcessor = () => {
  return useMutation((formPayload) => {
    console.log(formPayload)
    return axios.post(
      "http://localhost:3000/users",
      formPayload
      );
    });
  };
  
*/

export default signUpRequestProcessor;
