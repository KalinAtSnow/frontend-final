import { useEffect, useState } from "react";
import { cardApiService } from "../Data/CardService";
import { Card } from "../Data/Interfaces";

export function ViewAllCards() {
  const [cardData, setCardData] = useState<Card[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await cardApiService.GetRange(7, 25);
        setCardData(data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchData();
  }, []);

  if (cardData == undefined) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="p-8 bg-primary-100 flex flex-wrap">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-6 gap-4">
          {cardData?.map((card) => (
            <div
              className=""
              key={card.id}
            >
              <img
                className="hover:scale-105 hover:shadow-lg"
                src={card.imageurl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
