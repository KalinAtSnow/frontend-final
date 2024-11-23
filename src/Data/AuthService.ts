import axios from "axios";
import { API_URL } from "./CardService";
import { UserDTO } from "./Interfaces";

export const AuthEndpoint = async (idToken: string) => {
  const response = await axios.get(API_URL + "/api/user/Authorize", {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
  return response.data
};

export const getUserByEmail = async (data: string) => {
  const response = await axios.get(API_URL + "/api/user/getUserByEmail", {
    params: {
      email: data,
    },
  });
  return response.data;
};

export const AddUser = async (data: UserDTO) => {
  const response = await axios.post(API_URL + "/api/user/addUser", data);
  return response.data;
};

