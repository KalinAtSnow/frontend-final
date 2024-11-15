import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCardRangeQuery } from "../Data/CardMutations";
import { useSetRangeQuery } from "../Data/SetMutations";

export function HomePage() {
  const navigator = useNavigate();

  const [columns, setColumns] = useState(5); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setColumns(5); 
      } else if (window.innerWidth >= 1024) {
        setColumns(4); 
      } else if (window.innerWidth >= 768) {
        setColumns(3); 
      } else if (window.innerWidth >= 640) {
        setColumns(2); 
      } else {
        setColumns(1); 
      }
    };
    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data: cardData } = useCardRangeQuery(7, 27);
  const { data: setData } = useSetRangeQuery(116, 118);

  const cardClicked = (id: number) => {
    navigator(`Details/${id}`);
  };
  return (
    <div className="bg-primary-100">
      <div className="m-16">
        <p className="text-center font-bold text-40px">PokeDecks</p>
        <p className="mx-auto max-w-[40vw]">
          Welcome to my app bla bla bla work in progress bla bla bla track collected cards and make decks bla bla bla
        </p>
      </div>
      <div className="bg-primary-400 min-h-96 grid grid-cols-2">
        <div className="m-16 flex-col">
          <p className="text-primary-800 text-36px text-center">Pokemon</p>
          <p className="text-primary-200 text-center p-4">
            Look at all the cool pokemon right here!
          </p>
        </div>

        <div className="p-8 flex flex-wrap">
          <div className="bg-primary-200 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {cardData ? (
              cardData
                .slice(0, 3*columns)
                .map((card) => (
                  <div
                    className="hover:scale-110 hover:shadow-lg"
                    key={card.id}
                    onClick={() => cardClicked(card.id)}
                  >
                    <img
                      className="h-40"
                      src={card.imageurl}
                      alt={card.cardname}
                    />
                  </div>
                ))
            ) : (
              <div className="animate-spin" />
            )}
          </div>
        </div>
      </div>

      <div className="bg-primary-200 min-h-96 grid grid-cols-2">
        <div className="p-8 flex flex-wrap">
          <div className="bg-primary-300 p-2 grid grid-cols-3 gap4">
            {setData ? (
              setData?.map((set) => (
                <div
                  className="hover:scale-110 hover:shadow-lg"
                  key={set.id}
                  onClick={() => cardClicked(set.id)}
                >
                  <img className="h-40" src={set.imageurl} />
                </div>
              ))
            ) : (
              <div className="animate-spin" />
            )}
          </div>
        </div>
        <div className="m-16 flex-col">
          <p className="text-primary-800 text-36px text-center">Sets</p>
          <p className="text-primary-400 text-center p-4">The Newest Sets</p>
        </div>
      </div>
    </div>
  );
}
