import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "./CardService";
import { Deck, DeckDTO } from "./Interfaces";
import { getCookie } from "../Pages/Functions";

async function GetDecks(): Promise<Deck[]> {
    try {
      const email = getCookie("id_token");
      const response = await axios.get<Deck[]>(`${API_URL}/api/Deck/get`, {
        headers:{
          "Email": email
        }});
      return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("could not fetch decks" + error.message);
      throw error;
    }
  }

  async function AddDeck(data: DeckDTO): Promise<void> {
    try {
      const email = getCookie("id_token");
      await axios.post(`${API_URL}/api/Deck`, data, {
        headers:{
          "Email": email
        }});
        toast.success("Deck added successfully");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("could not add card to inventory" + error.message);
      throw error;
    }
  }

  export const deckApiService = {
    GetDecks: GetDecks,
    AddDeck: AddDeck
  };