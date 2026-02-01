import styles from "./Header.module.css";
import logo from "../../../public/images/logo-trans.png";
import southern from "../../../public/images/southernchile.png";
import siteConfig from "../../config/siteConfig";
import useTranslation from "../../hooks/useTranslation";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Header = () => {
  const { t, language } = useTranslation();
  const { toggleLanguage } = useContext(LanguageContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleServicesClick = (e) => {
    e.preventDefault();
    window.location.href = "/#services";
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "#", onClick: handleServicesClick },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguageSelect = (lang) => {
    toggleLanguage();
    setIsDropdownOpen(false);
  };

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* MAINBAR - Barra principal */}
      <div className={styles.mainBar}>

        {/* IZQUIERDA */}
        <a href="/" onClick={handleLogoClick} className={styles.brand}>
          <img src={logo} alt="Logo empresa" />
          <img src={southern} alt="Nombre empresa" />
        </a>

        {/* CENTRO */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ""}`}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={(e) => {
                  item.onClick?.(e);
                  handleNavClick(item.href);
                }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* DERECHA */}
        <div className={styles.rightSection}>
          <div className={styles.languageDropdown}>
            <button
              className={styles.dropdownBtn}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              title="Cambiar idioma"
            >
              {language.toUpperCase()}
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <button
                  onClick={() => handleLanguageSelect("es")}
                  className={`${styles.dropdownItem} ${language === "es" ? styles.active : ""}`}
                >
                  Español
                </button>
                <button
                  onClick={() => handleLanguageSelect("en")}
                  className={`${styles.dropdownItem} ${language === "en" ? styles.active : ""}`}
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* HAMBURGER MENU */}
          <button 
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
