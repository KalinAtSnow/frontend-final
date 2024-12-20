import { useNavigate, useParams } from "react-router";
import { useCardByIdQuery, useSetCardsQuery } from "../Data/CardMutations";
import { useEffect, useState } from "react";
import { useSetByIdQuery } from "../Data/SetMutations";
import { getRandomItems } from "./Functions";
import GNumberInput from "../assets/Generics/gNumberInput";
import {
  GNumberInputController,
  useGNumberInput,
} from "../assets/Generics/gNumberInputController";
import { Card, InventoryDTO } from "../Data/Interfaces";
import { inventoryApiService } from "../Data/inventoryService";
import SmallCardContainer from "../assets/Generics/SmallCardContainer";
import { useVariableCards } from "../assets/VariableCardPull";
import { GSelectInputController, useGSelectInput } from "../assets/Generics/gSelectInputController";
import GSelectInput from "../assets/Generics/gSelectInput";

export const Details = () => {
  const { id } = useParams();

  const [cardsShown, setCardsShown] = useState(0);
  const control: GNumberInputController = useGNumberInput(0, (v) =>
    v <= 0 ? "Please enter a number greater than 0" : ""
  );
  const [randomSetCards, setRandomSetCards] = useState<Card[]>([]);

  const AddToInventory = () => {
    const newInventoryItem: InventoryDTO = {
      userId: 1,
      cardId: Number(id),
      quantity: control.value,
    };
    inventoryApiService.Post(newInventoryItem);
  };

  const {
    data: cardData,
    isLoading: cardDataLoading,
    isError: cardDataError,
  } = useCardByIdQuery(Number(id));

  const { data: setCardData } = useSetCardsQuery(Number(cardData?.setid));

  const navigator = useNavigate();

  const {
    data: setByIdData,
    isLoading: setByIdLoading,
    isError: setByIdError,
  } = useSetByIdQuery(cardData?.setid || 0);

  useEffect(() => {
    setRandomSetCards(setCardData ? getRandomItems(setCardData, 10) : []);
  }, [setCardData]);

  useVariableCards(setCardsShown, [10, 10, 6, 5, 3]);
  const [dataSaver, setDataSaver] = useState<boolean>(false);
  useEffect(() => {
    setDataSaver(localStorage.getItem("dataSaver") === "true");
  }, []);

  const selectControl : GSelectInputController = useGSelectInput( ["No Foil", "Reverse Holo", "Holo"], (value: string) => value === "" ? "Please select a rarity" : ""); 
  
  useEffect(() => {
    if (cardData && cardData.setid) return;
  }, [cardData]);

  if (cardDataLoading) {
    return <div>Loading Card Data...</div>;
  }
  if (setByIdLoading) {
    return <div>Loading Set Info...</div>;
  }

  if (cardDataError || setByIdError) {
    return <div>Error loading data.</div>;
  }

  function cardClicked(id: number) {
    navigator("../Details/" + id);
  }

  return (
    <>
      <div className="p-8 bg-primary-50">
        <div className="mx-auto items-center flex">
          <div className="p-2 ">
            <img
              src={dataSaver ? cardData?.imageurl : ""}
              alt={cardData?.cardname}
            />
          </div>
          <div>
            <p className="text-40px ml-4">{cardData?.cardname}</p>
            <div>
              <label className="p-2">
                <GNumberInput control={control} maximum={100} minimum={0} />
              </label>
              <div>
              <label className="p-2">
                <GSelectInput
                  control={selectControl}
                  label="Select a rarity"
                />
              </label>
            </div>
            </div>
            <button className="bg-primary-300 m-2 hover:bg-primary-400 hover:text-black text-black text-sm rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" onClick={AddToInventory}>
              {" "}
              Add to Inventory{" "}
            </button>
          </div>
        </div>
      </div>

      {setByIdData ? (
        <div className="bg-primary-300 min-h-52">
          <p>More cards from {setByIdData?.setname}</p>
          <div>
            <div className="p-2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 mx-auto lg:grid-cols-10 gap-4">
              {randomSetCards &&
                randomSetCards.slice(0, cardsShown).map((card) => (
                  <div className="relative cursor-pointer" key={card.id} onClick={() => cardClicked(card.id)}>
                    <SmallCardContainer
                      cardUrl={card.imageurl}
                      alt={card.cardname}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="bg-primary-50 min-h-52">
        <p>More cards featuring {cardData?.cardname}</p>
      </div>
    </>
  );
};
