import { useParams } from "react-router";
import { useCardByIdQuery, useSetCardsQuery } from "../Data/CardMutations";
import { useEffect } from "react";
import { useSetByIdQuery } from "../Data/SetMutations";
import { getRandomItems } from "./Functions";
import GNumberInput from "../assets/Generics/gNumberInput";
import { GNumberInputController, useGNumberInput } from "../assets/Generics/gNumberInputController";
import { useUpdateInventoryMutation } from "../Data/inventoryMutations";
import { InventoryDTO } from "../Data/Interfaces";

export const Details = () => {
  const { id } = useParams();

  const control : GNumberInputController = useGNumberInput(1, (v) => v <= 0 ?"Please enter a number greater than 0" : "");

  const postInventory = useUpdateInventoryMutation()

  function AddToInventory() {
    const newInventoryItem : InventoryDTO = {
      userId: 1,
      cardId : Number(id),
      quantity: control.value
    }
    postInventory.mutate(newInventoryItem)
  }

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
  
  
  if (cardDataLoading){
    return <div>Loading Card Data...</div>
  }
  if( setByIdLoading) {
    return <div>Loading Set Info...</div>;
  }
  
  const randomSetCards = setCardData ? getRandomItems(setCardData, 6) : [];

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
                <GNumberInput control={control} maximum={100} minimum={0} />
                <button onClick={()=>AddToInventory}> Add to Inventory  </button>
              </label>
            </div>
          </div>
        </div>
      </div>

    {setByIdData ? 
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
              : <></>}

      <div className="bg-primary-100 min-h-52">
        <p>More cards featuring {cardData?.cardname}</p>
      </div>
    </>
  );
};
