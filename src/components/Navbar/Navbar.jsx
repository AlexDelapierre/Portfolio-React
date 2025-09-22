import { useState } from "react";
import "./Navbar.css";
import PhotoIdentite from "../../assets/img/Photo_identite.jpg";
import HamMenuIcon from "../../assets/icons/Hamburger-menu.svg";
import CloseIcon from "../../assets/icons/xmark-solid.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // liens du menu
  const navLinks = [
    { href: "./#home", label: "Accueil" },
    { href: "./#about", label: "A propos" },
    { href: "./#skills", label: "Compétences" },
    { href: "./#projects", label: "Projets" },
    { href: "./#contact", label: "Contact" },
  ];

  // clic hamburger
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // clic logo
  const handleLogoClick = () => (window.location.href = "/");

  // clic lien mobile
  const handleLinkClick = () => setMenuOpen(false);

  // détecter si le lien est actif
  const isActive = (href) => {
    return window.location.hash === href.replace("./", "#") || window.location.pathname === href.replace("./", "/");
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
            Alexandre <span className="text-secondary-color">Delapierre</span>
          </span>
        </div>

        <div className="header__main">
          {/* menu desktop */}
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href} className="header__link-wrapper">
                <a
                  href={link.href}
                  className={`header__link ${isActive(link.href) ? "active" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* hamburger menu */}
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <img
              src={HamMenuIcon}
              alt="hamburger menu"
              className={`header__main-ham-menu ${menuOpen ? "d-none" : ""}`}
            />
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
            {navLinks.map((link) => (
              <li key={link.href} className="header__sm-menu-link">
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={isActive(link.href) ? "active" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
