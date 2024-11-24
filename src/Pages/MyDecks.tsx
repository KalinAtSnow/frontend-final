import { useDecksQuery } from "../Data/DeckMutation";

export function MyDecks() {

  const { data: deckData } = useDecksQuery();
  
  return (
    <>
      <div className="p-8 bg-primary-50 flex flex-wrap">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-6 gap-4">
          {deckData?.map((deck) => (
            <div className="relative" key={deck.id}>
              <p>{deck.deckname}</p>
              {/* <img
                className="hover:scale-105 hover:shadow-lg w-full"
                src={deck.highlightcardid}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
