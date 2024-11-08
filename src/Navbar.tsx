import { Link } from "react-router-dom";
import LoginLogout from "./LoginLogoutbutton";

function NavBar() {
  return (
    <div className="bg-primary-500 h-20">
      <div >
        <div className="flex content-center">
          <Link className="m-6" to="/cards" aria-label="view cards">
            <p>View Cards</p>
          </Link>
          <LoginLogout />
        </div>
      </div>
    </div>
  );
}

export default NavBar;