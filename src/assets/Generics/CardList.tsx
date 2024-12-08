import { CardWithQuantity } from "../../Data/Interfaces";
import FullCardContainer from "./FullCardContainer";

const CardList: React.FC<{
    cardData: CardWithQuantity[] ;
    cardClicked: (id: number) => void;
  }> = ({ cardData, cardClicked }) => {
  return (
    <>
      <div className="p-8 bg-primary-50 flex flex-wrap">
        <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto lg:grid-cols-6 gap-4">
          {cardData?.map((card) => (
            <div onClick={ () => cardClicked(card.card.id)}className="relative" key={card.card.id}>
              <FullCardContainer cardUrl={card.card.imageurl} alt={card.card.cardname} />
              {/* TODO: just do a + - button inline for now */}
              <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-50 text-white px-2 py-1 rounded">
                {card.quantity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardList
