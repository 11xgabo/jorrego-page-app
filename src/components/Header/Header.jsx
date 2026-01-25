import styles from "./Header.module.css";
import logo from "../../../public/images/logo-trans.png";
import southern from "../../../public/images/southernchile.png";
import siteConfig from "../../config/siteConfig";
import useTranslation from "../../hooks/useTranslation";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Header = () => {
  const { t, language } = useTranslation();
  const { toggleLanguage } = useContext(LanguageContext);

  const navItems = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#why-us" },
    { label: t("nav.contact"), href: "#footer" },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      {/* TOPVAR - Barra superior */}
      <div className={styles.topvar}>
        <div className={styles.languageSelector}>
          <button
            onClick={toggleLanguage}
            className={`${styles.langBtn} ${language === "en" ? styles.active : ""}`}
          >
            EN
          </button>
          <span className={styles.divider}>|</span>
          <button
            onClick={toggleLanguage}
            className={`${styles.langBtn} ${language === "es" ? styles.active : ""}`}
          >
            ES
          </button>
        </div>
      </div>

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
              <li key={index}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* DERECHA */}
        <div className={styles.contact}>
          <span>{siteConfig.contact.phone}</span>
          <span>{siteConfig.contact.email}</span>
        </div>

      </div>
    </header>
  );
};

export default Header;
