import { useParams } from "react-router";
import { useCardByIdQuery, useSetCardsQuery } from "../Data/CardMutations";
import { useEffect } from "react";
import { useSetByIdQuery } from "../Data/SetMutations";
import { getRandomItems } from "./Functions";

export const Details = () => {
  const { id } = useParams();

  const {
    data: cardData,
    isLoading: cardDataLoading,
    isError: cardDataError,
  } = useCardByIdQuery(Number(id));

  const { data: setCardData } = useSetCardsQuery(Number(cardData?.setid));

  const {
    data: setByIdData,
    isLoading: setByIdLoading,
    isError: setByIdError,
  } = useSetByIdQuery(cardData?.setid || 0);

  useEffect(() => {
    if (cardData && cardData.setid) return;
  }, [cardData]);

  if (cardDataLoading || setByIdLoading) {
    return <div>Loading...</div>;
  }

  const randomSetCards = getRandomItems(setCardData ?? [], 6);

  if (cardDataError || setByIdError) {
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <div className="p-8 bg-primary-100">
        <div className="mx-auto items-center flex">
          <div className="p-2 ">
            <img src={cardData?.imageurl} alt={cardData?.cardname} />
          </div>
          <div>
            <p className="text-40px ml-4">{cardData?.cardname}</p>
            <div>
              <label className="p-2">
                Add to Inventory
                <input
                  type="number"
                  className=" m-2 border max-w-10 border-primary-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-300 min-h-52">
        <p>More cards from {setByIdData?.setname}</p>
        <div>
          <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-6 gap-4">
            {randomSetCards &&
              randomSetCards.map((card) => (
                <div className="relative" key={card.id}>
                  <img
                    className="hover:scale-105 hover:shadow-lg w-full"
                    src={card.imageurl}
                    alt={card.cardname}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-primary-100 min-h-52">
        <p>More cards featuring {cardData?.cardname}</p>
      </div>
    </>
  );
};
