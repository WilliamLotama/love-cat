import { useNavigate } from "react-router-dom";
import Profil from "../assets/Profil.jpg";
import Logo2 from "../assets/catLogo.png";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-blue p-md-2">
      <div className="container">
        <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src={Logo2} width="140px" className="navbar-brand pb-4" />
        </a>
        <div>
          <img
            src={Profil}
            width="60px"
            className="rounded-circle border border-3 border-blue mt-1"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
