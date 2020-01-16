import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-al">
      <h1 class="nom">YAKAETREZEN</h1>
      <div class="menu">
        <div className="link">
          <Link class="presentation" to="/presentation">
            {" "}
            Présentation{" "}
          </Link>
          <Link class="qui" to="/qui">
            {" "}
            Qui sommes-nous?
          </Link>
          <Link class="coach" to="/coach">
            Coachs et mentors
          </Link>
          <Link class="video" to="/video">
            {" "}
            Vidéos
          </Link>
          <Link class="formation" to="/formation">
            {" "}
            Formations
          </Link>
          <Link class="lecture" to="/lecture">
            {" "}
            Lectures
          </Link>
          <Link class="lecture" to="/contact">
            {" "}
            Contacts
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
