import React from "react";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import Logo2 from "../assets/catLogo.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="banner-home">
        <div className="text-center d-flex justify-content-center align-items-center">
          <div className="justify-content-center">
            <img src={Logo2} width="280px" alt="logo" />
            <div className="d-flex flex-wrap justify-content-center " style={{ marginTop: "3px" }}>
              <div className="titleHome" onClick={() => navigate("/cat")}>
                Adobt Me
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wave Bottom */}
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffa640"
            fill-opacity="1"
            d="M0,192L48,208C96,224,192,256,288,277.3C384,299,480,309,576,282.7C672,256,768,192,864,186.7C960,181,1056,235,1152,250.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
