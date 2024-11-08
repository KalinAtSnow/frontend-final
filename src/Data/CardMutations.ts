// cardMutations.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Card } from "./Interfaces";
import { apiService } from "./CardService";

export const useUpdateCardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, Card>({
    mutationFn: apiService.Put,
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

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, Card>({
    mutationFn: apiService.Delete,
    onSuccess: () => {
      toast.success("Card deleted successfully");
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

// export const useAddCardMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: apiService.Post,
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         refetchType: "all",
//         queryKey: ["cards"],
//       });
//     },
//   });
// };