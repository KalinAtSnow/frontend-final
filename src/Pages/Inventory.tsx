import { useNavigate } from "react-router-dom";
import { useInventoryCardsQuery } from "../Data/CardMutations";
import CardList from "../assets/Generics/CardList";
import { getCookie } from "./Functions";
import { useState, useEffect } from "react";
import { CardWithQuantity } from "../Data/Interfaces";
import { SearchIcon } from "lucide-react";

export function Inventory() {
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCards, setFilteredCards] = useState<CardWithQuantity[]>([]);
  const { data: cardData } = useInventoryCardsQuery();

  useEffect(() => {
    if (cardData) {
      const filtered = cardData.filter((card) =>
        card.card.cardname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCards(filtered);
    }
  }, [cardData, searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const navigator = useNavigate();

  const cardClicked = (id: number) => {
    navigator(`Details/${id}`);
    //navigator(`404`);
  };
  
  if (filteredCards == undefined) {
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
        <>
        <div className="flex justify-center bg-primary-50 pt-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by card name..."
          className="pl-12 py-3 rounded-full text-lg border-2 border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-md transition duration-300 "
          />
        <SearchIcon className="relative right-60 top-4 h-6 w-6 text-primary-00 hover:text-primary-600" />
      </div>
        <CardList cardData={cardData ? filteredCards : []} cardClicked={cardClicked} />
          </>
      ) : (
        <div>
          <p>You need to be logged in to view your inventory.</p>
        </div>
      )}
    </>
  );
}
