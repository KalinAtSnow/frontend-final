/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import toast from "react-hot-toast";
import { Card, Card_Inventory } from "./Interfaces";

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

async function GetCardsInInventory(): Promise<Card_Inventory[]> {
  try {
    const email = document.cookie.split("=")[1];
    const response = await axios.get<Card_Inventory[]>(`${API_URL}/api/Card/get/inventory`, {
      headers:{
        "Email": email
      }});
    return response.data;
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
    const email = document.cookie.split("=")[1];
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
  GetInventoryCard: GetCardInInventory
};