import axiosInstance from "./axiosInstance";

export const login = async (loginValues) => {
  const {data} = await axiosInstance.post('user/login', loginValues);
  return data
}


export const signUp = async (signUpValues) => {
  const {data} = await axiosInstance.post('user/register', signUpValues);
  return data
}

export const sendForgotPassword = async (email) => {
  const {data} = await axiosInstance.post('user/forgotPassword', {email});
  return data
}