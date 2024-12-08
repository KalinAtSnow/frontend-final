import { useNavigate } from "react-router-dom";
import { useInventoryCardsQuery } from "../Data/CardMutations";
import CardList from "../assets/Generics/CardList";

export function Inventory() {
  const { data: cardData } = useInventoryCardsQuery();
  const navigator = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cardClicked = (id: number) => {
    // navigator(`Details/${id}`);
    navigator(`404`);

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
