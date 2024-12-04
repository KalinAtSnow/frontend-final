/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import toast from "react-hot-toast";
import { Card, Card_Inventory, CardWithQuantity } from "./Interfaces";
import { getCookie } from "../Pages/Functions";

export const API_URL = import.meta.env.VITE_API_URL;

console.log("api url" , API_URL);

async function GetCards(): Promise<Card[]> {
  try {
    const response = await axios.get<Card[]>(`${API_URL}/api/Card/getall`);
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch cards" + error.message);
    throw error;
  }
}

async function GetDeckCards(id:number): Promise<CardWithQuantity[]> {
  try {
    const email = getCookie("id_token");
    const response = await axios.get<CardWithQuantity[]>(`${API_URL}/api/Card/getDeckCards/${Number(id)}`,{
      headers:{
        "Email": email
      }});
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch cards" + error.message);
    throw error;
  }
}

async function GetCard(id:number): Promise<Card> {
  try {
    const response = await axios.get<Card>(`${API_URL}/api/Card/get/${id}`);
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch card" + error.message);
    throw error;
  }
}

async function GetCardRange(start:number, end:number): Promise<Card[]> {
  try {
    const response = await axios.get<Card[]>(`${API_URL}/api/Card/get/${start}/${end}`);
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch card range" + error.message);
    throw error;
  }
}

async function GetCardsInSet(id:number): Promise<Card[]> {
  try {
    const response = await axios.get<Card[]>(`${API_URL}/api/Card/get/set/${id}`);
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch cards from set" + error.message);
    throw error;
  }
}

async function GetCardsInInventory(): Promise<CardWithQuantity[]> {
  try {
    const email = getCookie("id_token");
    const response = await axios.get<Card_Inventory[]>(`${API_URL}/api/Card/get/inventory`, {
      headers:{
        "Email": email
      }});
      const transferredData: CardWithQuantity[] = response.data.map((item: Card_Inventory) => {
        const card: Card = {
          id: item.id,
          pokemonid: item.pokemonid,
          pokemontypeid: item.pokemontypeid,
          setid: item.setid,
          tcgplayerurl: item.tcgplayerurl,
          cardnumber: item.cardnumber,
          imageurl: item.imageurl,
          cardname: item.cardname
        };
  
        const quantity = item.inventories.length > 0 ? item.inventories[0].quantity ?? 0 : 0;
  
        return { card, quantity };
      });
  
      return transferredData;
  } catch (error: any) {
    toast.error("could not fetch cards in inventory" + error.message);
    throw error;
  }
}

async function PutCard(upload: Card): Promise<void> {
  try {
    await axios.put(`${API_URL}/${upload.id}`, upload);
  } catch (error: any) {
    toast.error("could not update card" + error.message);
    throw error;
  }
}

async function GetCardInInventory(id:number): Promise<Card_Inventory> {
  try {
    const email = getCookie("id_token");
    const response = await axios.get<Card_Inventory>(`${API_URL}/api/Card/get/${id}`,{headers:{
      "Email": email
    }});
    
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch card" + error.message);
    throw error;
  }
}

export const cardApiService = {
  Put: PutCard,
  Get: GetCards,
  GetRange: GetCardRange,
  GetCard: GetCard,
  GetInventory: GetCardsInInventory,
  GetSetCards: GetCardsInSet,
  GetInventoryCard: GetCardInInventory,
  GetDeckCards: GetDeckCards
};