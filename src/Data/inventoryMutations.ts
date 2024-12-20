import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { inventoryApiService } from "./inventoryService";
import { Inventory } from "./Interfaces";

export const useUpdateInventoryMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, Inventory>({
        mutationFn: inventoryApiService.Put,
        onSuccess: () => {
            toast.success("Card updated successfully");
            queryClient.invalidateQueries({
                refetchType: "all",
                queryKey: ["inventory", "cards"],
            });
        },
        onError: (error) => {
            toast.error("Something went wrong: " + error.message);
        },
    });
};