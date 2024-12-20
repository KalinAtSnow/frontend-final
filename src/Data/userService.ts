import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "./CardService";
import { User } from "./Interfaces";
import { getCookie } from "../Pages/Functions";

async function getUserInfo(): Promise<User> {
    try {
      const email = getCookie("id_token");
      const response = await axios.get<User>(`${API_URL}/api/User/`, {
        headers:{
          "Email": email
        }});
      return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("could not fetch user info" + error.message);
      throw error;
    }
  }

  export const userApiService = {
    getUserInfo: getUserInfo,
  };