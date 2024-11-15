/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import toast from "react-hot-toast";
import { Sets } from "./Interfaces";

export const API_URL = import.meta.env.VITE_API_URL;

console.log("api url" , API_URL);

async function GetSet(): Promise<Sets[]> {
  try {
    const response = await axios.get<Sets[]>(`${API_URL}/api/Set/getall`);
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch Sets" + error.message);
    throw error;
  }
}

async function GetSets(id:number): Promise<Sets> {
  try {
    const response = await axios.get<Sets>(`${API_URL}/api/Set/get/${id}`);
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch Sets" + error.message);
    throw error;
  }
}

async function GetSetsRange(start:number, end:number): Promise<Sets[]> {
  try {
    const response = await axios.get<Sets[]>(`${API_URL}/api/Set/get/${start}/${end}`);
    return response.data;
  } catch (error: any) {
    toast.error("could not fetch Sets" + error.message);
    throw error;
  }
}

async function PutSets(upload: Sets): Promise<void> {
  try {
    await axios.put(`${API_URL}/${upload.id}`, upload);
  } catch (error: any) {
    toast.error("could not update Sets" + error.message);
    throw error;
  }
}

export const setApiService = {
  Put: PutSets,
  Get: GetSet,
  GetRange: GetSetsRange,
  GetSets: GetSets
};