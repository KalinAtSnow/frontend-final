import { useNavigate } from "react-router-dom";
import { useInventoryCardsQuery } from "../Data/CardMutations";
import CardList from "../assets/Generics/CardList";
import { getCookie } from "./Functions";

export function Inventory() {
  
  const { data: cardData } = useInventoryCardsQuery();
  const navigator = useNavigate();

  const cardClicked = (id: number) => {
    navigator(`Details/${id}`);
    //navigator(`404`);
  };
  
  if (cardData == undefined) {
    return <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        You need to be logged in to view your inventory.
        </div>
    </div>
  }
  
  const email = getCookie("id_token");
  
  return (
    <>
      {email ? (
        <CardList cardData={cardData} cardClicked={cardClicked} />
      ) : (
        <div>
          <p>You need to be logged in to view your inventory.</p>
        </div>
      )}
    </>
  );
}
