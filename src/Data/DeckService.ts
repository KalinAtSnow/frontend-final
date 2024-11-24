import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "./CardService";
import { Deck } from "./Interfaces";

async function GetDecks(): Promise<Deck[]> {
    try {
      const email = document.cookie.split("=")[1];
      const response = await axios.get<Deck[]>(`${API_URL}/api/Deck/get`, {
        headers:{
          "Email": email
        }});
      return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("could not fetch cards in inventory" + error.message);
      throw error;
    }
  }

  export const deckApiService = {
    GetDecks: GetDecks
  };