import { useState, useEffect } from "react";
import { apiService } from "./Data/CardService";
import { Card } from "./Data/Interfaces";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const [cardData, setCardData] = useState<Card[]>();
  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.GetRange(7, 27);
        setCardData(data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchData();
  }, []);

  const cardClicked = (id: number) => {
    navigator(`Details/${id}`);
  };
  return (
    <div className="bg-primary-100">
      <div className="m-16">
        <p className="text-center font-bold text-40px">Name of the app</p>
        <p className="mx-auto max-w-[40vw]">
          Welcome to my app bla bla bla Lorem ipsum odor amet, consectetuer
          adipiscing elit. Accumsan molestie morbi aenean, suscipit porttitor
          morbi. Donec malesuada rhoncus a ullamcorper egestas? Id congue
          blandit eros cubilia conubia. Aenean justo varius amet quam cubilia
          odio eu nec. Massa aliquam senectus amet mattis inceptos nulla
          elementum aenean natoque. Fusce venenatis felis ultricies
          pellentesque, mauris nulla enim. Dictum ac neque natoque sed magna
          lacus placerat. Scelerisque quam fames nisl dignissim felis aliquet.
          Imperdiet dapibus magna tellus neque purus curae dolor. Lobortis erat
          fermentum vitae pellentesque feugiat eros. Netus tincidunt nisi
          ullamcorper amet tempus amet. Feugiat rutrum fermentum; consequat
          varius penatibus varius gravida commodo.
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
            {cardData ?
            cardData?.map((card) => (
              <div 
              className="hover:scale-110 hover:shadow-lg"
              key={card.id}
              onClick={() => cardClicked(card.id)}
              >
              <img className="h-40" src={card.imageurl} />
              </div>
            ))
            :
            <div className="animate-spin"/>
          }
          </div>
        </div>
      </div>
    </div>
  );
}
