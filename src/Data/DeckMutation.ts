import { useQuery } from "@tanstack/react-query";
import { deckApiService } from "./DeckService";

export const useDecksQuery = () => {
    return useQuery({
      queryKey: ["Decks"],
      queryFn: ()=> deckApiService.GetDecks(),
    })
  };