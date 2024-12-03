import { Link } from "react-router-dom";
import Pokeball from "../src/assets/profile.svg";

function NavBar() {
  return (
    <div className="bg-primary-800 h-20">
      <div className="sm:block ">
        <div className="flex content-center">
          <Link className="m-6 text-primary-100" to="/" aria-label="view cards">
            <p>Home</p>
          </Link>
          <Link
            className="m-6 text-primary-100  hidden sm:block"
            to="/cards"
            aria-label="view cards"
          >
            <p>View Cards</p>
          </Link>
          <Link
            className="m-6 text-primary-100"
            to="/inventory"
            aria-label="view inventory"
          >
            <p>View Inventory</p>
          </Link>
          <Link
            className="m-6 text-primary-100"
            to="/MyDecks"
            aria-label="view decks"
          >
            <p>My Decks</p>
          </Link>
          <Link
            className="m-6 text-primary-100"
            to="/AccountSettings"
            aria-label="Account Settings"
          >
            <img src={Pokeball} alt="Pokeball" className="h-10 w-10 " />
          </Link>
          {/* <LoginLogout /> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
