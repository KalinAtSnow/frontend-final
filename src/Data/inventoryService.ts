import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "./CardService";
import { Inventory, InventoryDTO } from "./Interfaces";

async function Post(upload: InventoryDTO): Promise<void> {
    try {
        await axios.post(`${API_URL}/api/inventory/`, upload);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        toast.error("could not add card to inventory" + error.message);
        throw error;
    }
}

async function Put(upload: Inventory): Promise<void> {
    try {
        await axios.put(`${API_URL}/api/inventory`, upload);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        toast.error("could not update card" + error.message);
        throw error;
    }
}

export const inventoryApiService = {
    Post: Post,
    Put: Put
};