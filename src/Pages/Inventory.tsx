import { useNavigate } from "react-router-dom";
import { useInventoryCardsQuery } from "../Data/CardMutations";

export function Inventory() {
  const { data: cardData } = useInventoryCardsQuery();
  const navigator = useNavigate();

  const cardClicked = (id: number) => {
    navigator(`../../Details/${id}`);
  };

  if (cardData == undefined) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="p-8 bg-primary-50 flex flex-wrap">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-6 gap-4">
          {cardData?.map((card) => (
            <div onClick={ () => cardClicked(card.id)} className="relative" key={card.id}>
              <img
                className="hover:scale-105 hover:shadow-lg w-full"
                src={card.imageurl}
                alt={card.cardname}
              />
              <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-50 text-white px-2 py-1 rounded">
                {card.inventories[0]?.quantity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
