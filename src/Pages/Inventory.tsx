import { useNavigate } from "react-router-dom";
import { useInventoryCardsQuery } from "../Data/CardMutations";
import CardList from "../assets/Generics/CardList";

export function Inventory() {
  const { data: cardData } = useInventoryCardsQuery();
  const navigator = useNavigate();

  const cardClicked = (id: number) => {
    navigator(`Details/${id}`);
  };

  if (cardData == undefined) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <CardList cardData={cardData} cardClicked={cardClicked} />
    </>
  );
}
