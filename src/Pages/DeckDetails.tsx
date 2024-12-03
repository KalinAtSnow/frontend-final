
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
      <CardList cardData={cardData} cardClicked={()=>{}} />
    </>
  );
}
