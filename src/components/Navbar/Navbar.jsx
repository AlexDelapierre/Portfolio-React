import { useState, useEffect } from "react";
import "./Navbar.css";
import PhotoIdentite from "../../assets/img/Photo_identite.jpg";
import HamMenuIcon from "../../assets/icons/Hamburger-menu.svg";
import CloseIcon from "../../assets/icons/xmark-solid.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // section active

  // liens du menu
  const navLinks = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "A propos" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "career", label: "Parcours" },
    { id: "contact", label: "Contact" },
  ];

  // clic hamburger
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // clic logo → remonte en haut
  const handleLogoClick = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  // clic lien (desktop & mobile)
  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // détecter la section visible au scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // milieu de l'écran

      let currentSection = "home";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = link.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <li key={link.id} className="header__link-wrapper">
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`header__link ${
                    activeSection === link.id ? "active" : ""
                  }`}
                >
                  {link.label}
                </button>
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
              className={`header__main-ham-menu-close ${
                menuOpen ? "" : "d-none"
              }`}
            />
          </div>
        </div>
      </div>

      {/* menu mobile */}
      <div
        className={`header__sm-menu ${
          menuOpen ? "header__sm-menu--active" : ""
        }`}
      >
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            {navLinks.map((link) => (
              <li key={link.id} className="header__sm-menu-link">
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={activeSection === link.id ? "active" : ""}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
