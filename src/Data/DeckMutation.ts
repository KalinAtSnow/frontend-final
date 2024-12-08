import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deckApiService } from "./DeckService";

export const useDecksQuery = () => {
    return useQuery({
      queryKey: ["Decks"],
      queryFn: ()=> deckApiService.GetDecks(),
    })
  };

  export const useAddDeckMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: deckApiService.AddDeck,
      onSuccess: () => {
        console.log("Deck added successfully");
        queryClient.invalidateQueries({
          refetchType: "all",
          queryKey: ["Decks"],
        });
      },
      onError: (error) => {
        console.log("Something went wrong: " + error.message);
      },
    })
  };