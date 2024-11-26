import { Link } from "react-router-dom";
import LoginLogout from "./LoginLogoutbutton";
import Pokeball from "../src/assets/profile.svg";

function NavBar() {
  return (
    <div className="bg-primary-800 h-20">
      <div>
        <div className="flex content-center">
          <Link className="m-6 text-primary-100" to="/" aria-label="view cards">
            <p>Home</p>
          </Link>
          <Link
            className="m-6 text-primary-100"
            to="/cards"
            aria-label="view cards"
          >
            <p>View Cards</p>
          </Link>
          <Link
            className="m-6 text-primary-100"
            to="/inventory"
            aria-label="view cards"
          >
            <p>View Inventory</p>
          </Link>
          <Link
            className="m-6 text-primary-100"
            to="/MyDecks"
            aria-label="view cards"
          >
            <p>My Decks</p>
          </Link>
          <Link
            className="m-6 text-primary-100"
            to="/AccountSettings"
            aria-label="view cards"
          >
            <img src={Pokeball} alt="Pokeball" className="h-10 w-10 " />
          </Link>
          <LoginLogout />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
