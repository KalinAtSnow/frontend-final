/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import toast from "react-hot-toast";
import { Card } from "./Interfaces";

export const API_URL = import.meta.env.VITE_API_URL;

console.log("api url" , API_URL);

async function GetCard(): Promise<Card[]> {
  try {
    const response = await axios.get<Card[]>(`${API_URL}/api/Card/getall`);
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch cards" + error.message);
    throw error;
  }
}

async function GetCardRange(start:number, end:number): Promise<Card[]> {
  try {
    const response = await axios.get<Card[]>(`${API_URL}/api/Card/get/${start}/${end}`);
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch cards" + error.message);
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

const deleteCard = async (card: Card): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${card.id}`);
  } catch (error: any) {
    toast.error("could not delete card" + error.message);
    throw error;
  }
};

// const PostCard = async (upload: {
//   image: File;
//   text: string;
//   Attack1: string;
//   id: number;
//   Attack2: string;
//   Ability: string;
//   retreat: number;
// }): Promise<void> => {
//   const formData = new FormData();
//   formData.append("id", upload.id.toString());
//   formData.append("Attack1", upload.Attack1);
//   formData.append("text", upload.text);
//   formData.append("image", upload.image);
//   formData.append("Attack2", upload.Attack2);
//   formData.append("Ability", upload.Ability);
//   formData.append("retreat", upload.retreat.toString());
//   await axios.post(`${API_URL}/`, formData);
// };

export const apiService = {
//   Post: PostCard,
  Delete: deleteCard,
  Put: PutCard,
  Get: GetCard,
  GetRange: GetCardRange
};