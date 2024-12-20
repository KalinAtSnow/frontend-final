import { useParams } from "react-router";
import { useInventoryCardQuery } from "../Data/CardMutations";
import { useEffect, useState } from "react";
import GNumberInput from "../assets/Generics/gNumberInput";
import {
  GNumberInputController,
  useGNumberInput,
} from "../assets/Generics/gNumberInputController";
import { inventoryApiService } from "../Data/inventoryService";
import { Inventory } from "../Data/Interfaces";


export const InventoryDetails = () => {
  const { id } = useParams();

  const control: GNumberInputController = useGNumberInput(0, (v) =>
    v <= 0 ? "Please enter a number greater than 0" : ""
  );


  const AddToInventory = () => {
    const newInventoryItem: Inventory = {
      Userid: 1,
      Cardid: Number(id),
      Quantity: control.value,
      Id: cardData?.id ? cardData?.id : 0,
    };
    inventoryApiService.Put(newInventoryItem);
  };

  const {
    data: cardData,
    isLoading: cardDataLoading,
    isError: cardDataError,
  } = useInventoryCardQuery(Number(id));

  useEffect(() => {}, []);
  useEffect(() => {
    console.log(cardData?.inventories[0].quantity);
    control.setValue(
      cardData?.inventories[0].quantity ? cardData?.inventories[0].quantity : 0
    );
    if (cardData && cardData.setid) return;
  }, [cardData]);

  const [dataSaver, setDataSaver] = useState<boolean>(false);
  useEffect(() => {
    setDataSaver(localStorage.getItem("dataSaver") === "true");
  }, []);

  if (cardDataLoading) {
    return <div>Loading Card Data...</div>;
  }

  if (cardDataError) {
    return (
      <div className="text-red-500">
        We were unable to find that card in your inventory. Add it and try
        again.
      </div>
    );
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
                <GNumberInput
                  Change={AddToInventory}
                  control={control}
                  maximum={100}
                  minimum={0}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
