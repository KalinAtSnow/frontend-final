import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetCardsQuery } from "../Data/CardMutations";
import { useAuth } from "react-oidc-context";
import { AddUser, AuthEndpoint, getUserByEmail } from "../Data/AuthService";
import { Card, UserDTO } from "../Data/Interfaces";
import { getRandomItems } from "./Functions";
import SmallCardContainer from "../assets/Generics/SmallCardContainer";
import { useVariableCards, useVariableSets } from "../assets/VariableCardPull";
import { useSetRangeQuery } from "../Data/SetMutations";

export function HomePage() {
  const navigator = useNavigate();
  const auth = useAuth();

  const [cardsShown, setCardsShown] = useState(0);
  const [setsShown, setSetsShown] = useState(6);
  const [randomCards, setRandomCards] = useState<Card[]>([]);
  const { data: cardData } = useSetCardsQuery(115);
  const { data: setData } = useSetRangeQuery(113, 118);

  useEffect(() => {
    ValidateUser();
  }, [auth.user?.id_token]);

  useEffect(() => {
    setRandomCards(cardData ? getRandomItems(cardData, 15) : []);
  }, [cardData]);

  async function ValidateUser() {
    if (auth.user && auth.user.id_token) {
      const data = await AuthEndpoint(auth.user.id_token);
      document.cookie = `id_token=${data}`;
      const currUser = await getUserByEmail(data);
      if (!currUser) {
        const newUser: UserDTO = {
          email: data,
          forename: data,
          surname: data,
          username: "",
        };
        AddUser(newUser);
      }
    }
  }

  const dataSaver = localStorage.getItem("dataSaver");

  useVariableCards(setCardsShown, [15, 12, 9, 10, 3]);
  useVariableSets(setSetsShown, [6, 6, 4, 3, 2]);

  const cardClicked = (id: number) => {
    navigator(`Details/${id}`);
  };
  const setClicked = (id: number) => {
    navigator(`Set/${id}`);
  };
  return (
    <div className="bg-primary-100">
      <div className="p-16">
        <p className="text-center font-bold text-56px">PokeDecks</p>
        <h1 className="text-center text-primary-800 text-36px">
          Track, Build, Complete: Your Ultimate Collectible Card Companion
        </h1>

        <p className="mx-auto max-w-[50vw] hidden md:block">
          Welcome to PokeDecks, the ultimate tool for collectors and deck
          builders. With our intuitive inventory system, you can easily track
          your entire collection, organize your cards, and see exactly what you
          need to complete your decks. Build custom decks based on what you own,
          check off cards as you acquire them, and keep an up-to-date inventory
          of your collection. Whether you're a casual collector or a competitive
          player, our platform helps you stay on top of your collection and
          ensures you're always ready for the next game.
        </p>
      </div>
      <div className="bg-primary-400 min-h-96 grid grid-cols-1 md:grid-cols-2 ">
        <div className="m-4 md:m-16 flex-col content-center  ">
          <p
            onClick={() => navigator("/cards")}
            className="text-primary-800 text-36px text-center cursor-pointer"
          >
            Pokemon
          </p>
          <p className="text-primary-50 text-center p-4">
            Look at all the cool pokemon right here!
          </p>
        </div>

        <div className="sm:px-2 px-8 py-2  flex flex-wrap ">
          <div className="bg-primary-200 content-center rounded-xl p-2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {randomCards ? (
              randomCards.slice(0, cardsShown).map((card) => (
                <div
                  className="hover:scale-110 hover:shadow-lg cursor-pointer"
                  key={card.id}
                  onClick={() => cardClicked(card.id)}
                >
                  <SmallCardContainer
                    cardUrl={card.imageurl}
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

      <div className="bg-primary-200 min-h-96 grid md:grid-cols-2 grid-cols-1">
        <div className="px-8 pb-2 md:p-8 flex flex-wrap order-2 md:order-1">
          <div className="bg-primary-300 rounded-xl p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {setData ? (
              [...setData].reverse().slice(0, setsShown).map((set) => (
                <div
                  className="hover:scale-110 cursor-pointer"
                  key={set.id}
                  onClick={() => setClicked(set.id)}
                >
                  <img
                    className="h-40"
                    src={dataSaver ? set.imageurl : ""}
                    alt={set.setname}
                  />
                </div>
              ))
            ) : (
              <div className="animate-spin" />
            )}
          </div>
        </div>
        <div className="m-4 md:m-16 flex-col content-center order-1 md:order-2">
          <p className="text-primary-900 text-36px text-center">Sets</p>
          <p className="text-primary-800 text-center p-4">The Newest Sets</p>
        </div>
      </div>
    </div>
  );
}
