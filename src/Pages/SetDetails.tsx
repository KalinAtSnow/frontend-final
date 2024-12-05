import { useParams } from "react-router";
import { useSetCardsQuery } from "../Data/CardMutations";
import { useSetByIdQuery } from "../Data/SetMutations";
import FullCardContainer from "../assets/Generics/FullCardContainer";

const SetDetails = () => {
  const { id } = useParams();

  const { data: setData } = useSetByIdQuery(Number(id));
  const { data: setCardData } = useSetCardsQuery(Number(id));

  if (setData == undefined) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="p-2 md:p-8 bg-primary-100 flex flex-wrap">
        <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto lg:grid-cols-6 gap-4">
          {setCardData && setCardData.length > 0 ? (
            setCardData.map((card) => (
              <div className="relative" key={card.id}>
                <FullCardContainer
                  cardUrl={card.imageurl}
                  alt={card.cardname}
                />
              </div>
            ))
          ) : (
            <p>No cards found in this set yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SetDetails;
