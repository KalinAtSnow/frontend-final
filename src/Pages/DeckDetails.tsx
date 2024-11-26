
import { useParams } from "react-router";
import { useDeckCardsQuery } from "../Data/CardMutations";

export function DeckDetails() {
    const { id } = useParams();
    const { data: cardData } = useDeckCardsQuery(Number(id));

  if (cardData == undefined) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="p-8 bg-primary-50 flex flex-wrap">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-6 gap-4">
          {cardData?.map((card) => (
            <div className="relative" key={card.card.id}>
              <img
                className="hover:scale-105 hover:shadow-lg w-full"
                src={card.card.imageurl}
                alt={card.card.cardname}
              />
              {/* TODO: just do a + - button inline for now */}
              <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-50 text-white px-2 py-1 rounded">
                {card.quantity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
