import "./NavBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="Main">
      <div className="Left">
        <ul>
            <li><Link to="/">Compagnie</Link></li> 
            <li><Link to="/Voli">voli</Link></li> 
            <li><Link to="/voliInPartenza">Voli in partenza</Link></li> 
        </ul>
      </div>
      <div className="Right">
        <h2 className="text">Air Station</h2>
      </div>
    </div>
  );
};

export default NavBar;
