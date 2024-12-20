import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Card } from "./Interfaces";
import { cardApiService } from "./CardService";

export const useUpdateCardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, Card>({
    mutationFn: cardApiService.Put,
    onSuccess: () => {
      toast.success("Card updated successfully");
      queryClient.invalidateQueries({
        refetchType: "all",
        queryKey: ["cards"],
      });
    },
    onError: (error) => {
      toast.error("Something went wrong: " + error.message);
    },
  });
};

export const useAllCardsQuery = () => {
  return useQuery({
    queryKey: ["cards"],
    queryFn: cardApiService.Get,
  })
};

export const useSetCardsQuery = (id: number) => {
  return useQuery({
    queryKey: ["set cards", id],
    queryFn: () => cardApiService.GetSetCards(id),
    enabled: !!id,
  })
};

export const useInventoryCardsQuery = () => {
  return useQuery({
    queryKey: ["InventoryCards"],
    queryFn: ()=> cardApiService.GetInventory(),
  })
};

export const useDeckCardsQuery = (id: number) => {
  return useQuery({
    queryKey: ["DeckCards", id],
    queryFn: ()=> cardApiService.GetDeckCards(id),
    enabled: !!id,
  })
};

export const useInventoryCardQuery = (id: number) => {
  return useQuery({
    queryKey: ["InventoryCard", id],
    queryFn: () => cardApiService.GetInventoryCard(id),
  })
};

export const useCardByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ["cards", id],
    queryFn: () => cardApiService.GetCard(id),
  })
};

export const useCardRangeQuery = (start: number, end: number) => {
  return useQuery({
    queryKey: ["card range", start, end],
    queryFn: () => cardApiService.GetRange(start, end),
  })
}; 
