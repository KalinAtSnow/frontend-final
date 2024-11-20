import { Link } from "react-router-dom";
import LoginLogout from "./LoginLogoutbutton";

function NavBar() {
  return (
    <div className="bg-primary-800 h-20">
      <div >
        <div className="flex content-center">
          <Link className="m-6 text-primary-100" to="/" aria-label="view cards">
            <p>Home</p>
          </Link>
          <Link className="m-6 text-primary-100" to="/cards" aria-label="view cards">
            <p>View Cards</p>
          </Link>
          <Link className="m-6 text-primary-100" to="/inventory" aria-label="view cards">
            <p>View Inventory</p>
          </Link>
          <Link className="m-6 text-primary-100" to="/MyDecks" aria-label="view cards">
            <p>My Decks</p>
          </Link>
          <LoginLogout />
        </div>
      </div>
    </div>
  );
}

export default NavBar;