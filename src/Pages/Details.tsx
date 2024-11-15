import { useState, useEffect } from "react";
import { Card } from "../Data/Interfaces";
import { useParams } from "react-router";
import { cardApiService } from "../Data/CardService";

export const Details = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState<Card>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== undefined) {
          if (isNaN(+id)) {
            throw new Error("ID is not a number");
          }
          const data = await cardApiService.GetCard(+id);
          setCardData(data);
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchData();
  }, [id]);

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
                {" "}
                Add Count to Library
                <input
                  type="number"
                  className=" m-2 border max-w-10 border-primary-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-300 min-h-52">
        <p>More cards from (this set)</p>
      </div>

      <div className="bg-primary-100 min-h-52">
        <p>More cards featuring {cardData?.cardname}</p>
      </div>
    </>
  );
};
