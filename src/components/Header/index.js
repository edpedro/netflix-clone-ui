import React from "react";
import { useLocation } from "react-router-dom";

import "./styles.css";

function Header({ black }) {
  const location = useLocation();

  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
            alt="netflix"
          />
        </a>
      </div>
      {location.pathname === "/movies" ? (
        <div className="header--user">
          <a href="/">
            <img
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              alt="user"
            />
          </a>
        </div>
      ) : (
        <div className="header--user-button">
          <a href="/">Entrar</a>
        </div>
      )}
    </header>
  );
}
export default Header;
