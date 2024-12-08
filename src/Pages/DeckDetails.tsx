import { useParams } from "react-router";
import { useDeckCardsQuery } from "../Data/CardMutations";
import CardList from "../assets/Generics/CardList";

export function DeckDetails() {
  const { id } = useParams();
  const { data: cardData } = useDeckCardsQuery(Number(id));

  if (cardData == undefined) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {cardData && cardData.length > 0 ? (
        <CardList cardData={cardData} cardClicked={() => {}} />
      ) : (
        <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">No Cards Found in This Deck</h1>
        <p className="text-lg text-gray-600 mb-6">
            Go to <a href="/inventory" className="text-blue-500 underline">your inventory</a> to add some.
        </p>
        <a href="/inventory">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Go to Inventory
            </button>
        </a>
        </div>
    </div>
      )}
    </>
  );
}
