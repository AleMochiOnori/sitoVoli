import "./NavBar.css";
import aereo from "./assets/aereo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Main">
      <div className="LogoSection">
        <img className="aereo" src={aereo} alt="Logo" />
        <h2 className="text">Air Station</h2>
      </div>
      <div className="LinksSection">
        <ul>
          <li><Link to="/" id="Home" >Home</Link></li>
          <li><Link to="/Compagnie">Compagnie</Link></li>
          <li><Link to="/voliInPartenza">Voli in partenza</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
