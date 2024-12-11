import { useNavigate, useParams } from "react-router";
import { useSetCardsQuery } from "../Data/CardMutations";
import FullCardContainer from "../assets/Generics/FullCardContainer";
import { useEffect, useState } from "react";
import { Card } from "../Data/Interfaces";
import { SearchIcon } from "lucide-react";

const SetDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: setCardData } = useSetCardsQuery(Number(id));

  useEffect(() => {
    if  (setCardData?.length === 0) {
      navigate('/404'); 
  }
  }, [setCardData]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  useEffect(() => {
    if (setCardData) {
      const filtered = setCardData.filter((card) =>
        card.cardname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCards(filtered);
    }
  }, [setCardData, searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
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
      <div className="p-2 md:p-8 bg-primary-50 flex flex-wrap">
        <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto lg:grid-cols-6 gap-4">
          {filteredCards && filteredCards.length > 0 ? (
            filteredCards.map((card) => (
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
