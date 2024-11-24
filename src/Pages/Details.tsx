import { useParams } from "react-router";
import { useCardByIdQuery, useSetCardsQuery } from "../Data/CardMutations";
import { useEffect, useState } from "react";
import { useSetByIdQuery } from "../Data/SetMutations";
import { getRandomItems } from "./Functions";
import GNumberInput from "../assets/Generics/gNumberInput";
import { GNumberInputController, useGNumberInput } from "../assets/Generics/gNumberInputController";
import { Card, InventoryDTO } from "../Data/Interfaces";
import { inventoryApiService } from "../Data/inventoryService";

export const Details = () => {
  const { id } = useParams();

  const control : GNumberInputController = useGNumberInput(0, (v) => v <= 0 ?"Please enter a number greater than 0" : "");
  const [randomSetCards, setRandomSetCards] = useState<Card[]>([])

  const AddToInventory = () => {
    const newInventoryItem : InventoryDTO = {
      userId: 1,
      cardId : Number(id),
      quantity: control.value
    }
    inventoryApiService.Post(newInventoryItem)
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
  
  useEffect(()=>{
  setRandomSetCards(setCardData ? getRandomItems(setCardData, 6) : [])
  }, [setCardData])

  useEffect(() => {
    if (cardData && cardData.setid) return;
  }, [cardData]);
  
  
  if (cardDataLoading){
    return <div>Loading Card Data...</div>
  }
  if( setByIdLoading) {
    return <div>Loading Set Info...</div>;
  }
  

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
              </label>
            </div>
                <button className="border-purple-400" onClick={AddToInventory}> Add to Inventory  </button>
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
                    //src={card.imageurl}
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
