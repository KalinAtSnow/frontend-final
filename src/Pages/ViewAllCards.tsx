import React, { useState, useEffect } from "react";
import { Card } from "../Data/Interfaces";
import { useCardRangeQuery } from "../Data/CardMutations";
import { useNavigate } from "react-router";
import { SearchIcon } from "lucide-react";
import FullCardContainer from "../assets/Generics/FullCardContainer";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);

  const { data: cards, isLoading, isError } = useCardRangeQuery(7, 255);

  useEffect(() => {
    if (cards) {
      const filtered = cards.filter((card) =>
        card.cardname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCards(filtered);
    }
  }, [cards, searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const navigator = useNavigate();

  if (isLoading) return <p>Loading cards...</p>;
  if (isError) return <p>Error loading cards.</p>;
  const cardClicked = (id: number) => {
    navigator(`/Details/${id}`);
  };

  return (
    <div className="100vh">
      <div className="flex justify-center bg-primary-50 pt-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by card name..."
          className="pl-12 py-3 rounded-full text-lg border-2 border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-md transition duration-300 "
        />
        <SearchIcon className="relative right-60 top-4 h-6 w-6 text-primary-500 hover:text-primary-600" />
      </div>

      <div className="p-2 md:p-8 bg-primary-50 flex flex-wrap">
        <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto lg:grid-cols-6 gap-4">
          {filteredCards?.map((card) => (
            <div
              className=""
              key={card.id}
              onClick={() => cardClicked(card.id)}
            >
              <FullCardContainer cardUrl={card.imageurl} alt={card.cardname} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
