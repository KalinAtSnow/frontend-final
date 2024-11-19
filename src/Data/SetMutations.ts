
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Sets } from "./Interfaces";
import { setApiService } from "./SetService";

export const useUpdateSetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, Sets>({
    mutationFn: setApiService.Put,
    onSuccess: () => {
      toast.success("Set updated successfully");
      queryClient.invalidateQueries({
        refetchType: "all",
        queryKey: ["Sets"],
      });
    },
    onError: (error) => {
      toast.error("Something went wrong: " + error.message);
    },
  });
};

export const useAllSetsQuery = () => {
  return useQuery({
    queryKey: ["Sets"],
    queryFn: setApiService.Get,
  })
};

export const useSetByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ["Sets", id],
    queryFn: () => setApiService.GetSets(id),
    enabled: !!id,
  })
};

export const useSetRangeQuery = (start: number, end: number) => {
  return useQuery({
    queryKey: ["Sets", start, end],
    queryFn: () => setApiService.GetRange(start, end),
  })
};
