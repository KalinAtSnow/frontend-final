import { useNavigate } from "react-router-dom";
import { useAddDeckMutation, useDecksQuery } from "../Data/DeckMutation";
import { PlusIcon } from "lucide-react";
import Modal from "../assets/Generics/Modal";
import { useState } from "react";
import GTextInput from "../assets/Generics/gTextInput";
import { useGTextInput } from "../assets/Generics/gTextInputController";
import { DeckDTO } from "../Data/Interfaces";
import { getCookie } from "./Functions";

export function MyDecks() {
  const { data: deckData } = useDecksQuery();
  const addDeckMutation = useAddDeckMutation();
  const [ispublic, setIspublic] = useState(false);

  const navigator = useNavigate();

  const deckClicked = (id: number) => {
    navigator(`Details/${id}`);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const nameControl = useGTextInput("", (v) =>
    v.length === 0 ? "Please enter a name" : ""
  );
  const deck: DeckDTO = {
    deckname: nameControl.value,
    ispublic: false,
  };
  const AddDeck = () => {
    addDeckMutation.mutate(deck);
    toggleModal();
  };

  const email = getCookie("id_token");

  return (
    <>
      {email ? (
        <div className="p-8 bg-primary-50 ">
          <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-6 gap-4">
            {deckData?.map((deck) => (
              <div
                onClick={() => deckClicked(deck.id)}
                className="relative cursor-pointer border-2 border-primary-300 rounded-lg p-2 text-center"
                key={deck.id}
              >
                <p>{deck.deckname}</p>
              </div>
            ))}
          </div>
          <button
            className="bg-primary-500 text-white p-2 rounded-full mt-4"
            onClick={() => {
              toggleModal();
            }}
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      ) : (
     <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        You need to be logged in to view your inventory.
        </div>
    </div>
      )}

      <Modal isOpen={isModalOpen} onClose={toggleModal} title="Add Deck">
        <div className="p-4 bg-primary-100 flex flex-wrap">
          <GTextInput label="Deck Name" control={nameControl} />

          <label className="ml-2">
            Would you like to make this deck public?
            <input
              type="checkbox"
              className="ml-2"
              checked={ispublic}
              onChange={() => setIspublic(!ispublic)}
            />
          </label>
        </div>

        <div className="flex justify-end p-4">
          <button
            className="bg-primary-500 text-white p-2 rounded-md mx-2"
            onClick={AddDeck}
          >
            Add Deck
          </button>

          <button
            onClick={toggleModal}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
