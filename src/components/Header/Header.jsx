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

  const handleServicesClick = (e) => {
    e.preventDefault();
    window.location.href = "/#services";
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
        <nav className={styles.nav}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}><a href={item.href} onClick={item.onClick}>{item.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* DERECHA */}
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

      </div>
    </header>
  );
};

export default Header;
