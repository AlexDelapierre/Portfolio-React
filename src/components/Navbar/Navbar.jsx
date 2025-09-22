import { useState } from "react";
import "./Navbar.css";
import PhotoIdentite from "../../assets/img/Photo_identite.jpg";
import HamMenuIcon from "../../assets/icons/Hamburger-menu.svg";
import CloseIcon from "../../assets/icons/xmark-solid.svg";

function Navbar() {
  // état du menu (ouvert ou fermé)
  const [menuOpen, setMenuOpen] = useState(false);

  // gestion clic hamburger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // gestion clic logo
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  // gestion clic sur un lien du menu mobile
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div
          className="header__logo-container"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <div className="header__logo-img-cont">
            <img
              src={PhotoIdentite}
              alt="Photo identité"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">
            Alexandre <span className="header__logo-last">Delapierre</span>
          </span>
        </div>

        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./" className="header__link">Accueil</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link">A propos</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#skills" className="header__link">Compétences</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link">Projets</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link">Contact</a>
            </li>
          </ul>

          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            {/* icône hamburger */}
            <img
              src={HamMenuIcon} 
              alt="hamburger menu"
              className={`header__main-ham-menu ${menuOpen ? "d-none" : ""}`}
            />
            {/* icône fermeture */}
            <img
              src={CloseIcon}
              alt="hamburger menu close"
              width="25"
              height="25"
              className={`header__main-ham-menu-close ${menuOpen ? "" : "d-none"}`}
            />
          </div>
        </div>
      </div>

      {/* menu mobile */}
      <div className={`header__sm-menu ${menuOpen ? "header__sm-menu--active" : ""}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./" onClick={handleLinkClick}>Accueil</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./#about" onClick={handleLinkClick}>A propos</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./#skills" onClick={handleLinkClick}>Compétences</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./#projects" onClick={handleLinkClick}>Projets</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./#contact" onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
